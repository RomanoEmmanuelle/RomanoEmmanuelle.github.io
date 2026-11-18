"""Build minimal public route data; never copy GPX sensor extensions."""
import argparse
import json
import math
from datetime import datetime, timedelta, timezone
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NS = {"g": "http://www.topografix.com/GPX/1/1"}


def distance(a, b):
    lat1, lon1, lat2, lon2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((lat2 - lat1) / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin((lon2 - lon1) / 2) ** 2
    return 6371000 * 2 * math.atan2(math.sqrt(h), math.sqrt(max(0, 1 - h)))


def duration(seconds):
    hours, remainder = divmod(round(seconds), 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours}:{minutes:02d}:{seconds:02d}"


def build(source, rpe):
    root = ET.parse(source).getroot()
    points = []
    length = gain = 0.0
    for segment in root.findall(".//g:trkseg", NS):
        previous = None
        for node in segment.findall("g:trkpt", NS):
            point = (float(node.attrib["lat"]), float(node.attrib["lon"]), float(node.find("g:ele", NS).text))
            stamp = datetime.fromisoformat(node.find("g:time", NS).text.replace("Z", "+00:00"))
            if previous:
                length += distance(previous, point)
                change = point[2] - previous[2]
                gain += max(change, 0)
            points.append((*point, length / 1000, stamp))
            previous = point
    if not points:
        raise ValueError("No track points found")
    seconds = (points[-1][4] - points[0][4]).total_seconds()
    pace = round(seconds / (length / 1000))
    local_date = points[0][4].astimezone(timezone(timedelta(hours=7)))
    summary = {
        "title": "Pocari Sweat Run Bandung 2026",
        "category": "Half Marathon",
        "date": local_date.date().isoformat(),
        "date_label": local_date.strftime("%d %B %Y").lstrip("0"),
        "distance_km": round(length / 1000, 2),
        "elapsed": duration(seconds),
        "pace": f"{pace // 60}:{pace % 60:02d}",
        "gain_m": round(gain),
        "rpe": rpe,
        "minimum_m": round(min(p[2] for p in points)),
        "maximum_m": round(max(p[2] for p in points)),
    }
    stride = max(1, math.ceil(len(points) / 1500))
    sampled = points[::stride]
    if sampled[-1] != points[-1]:
        sampled.append(points[-1])
    # Whitelist only location, elevation and cumulative distance. No timestamps
    # or sensor measurements are written to the public asset.
    route = [[round(p[0], 6), round(p[1], 6), round(p[2], 1), round(p[3], 4)] for p in sampled]
    target = ROOT / "assets/data/recent-race.json"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps({"summary": summary, "points": route}, separators=(",", ":")) + "\n")
    (ROOT / "_data/recent_race.json").write_text(json.dumps(summary, indent=2) + "\n")

    # Static breadcrumb preview remains usable if JavaScript or map tiles fail.
    xs = [p[1] * math.cos(math.radians(points[0][0])) for p in sampled]
    ys = [-p[0] for p in sampled]
    scale = min(680 / (max(xs) - min(xs)), 320 / (max(ys) - min(ys)))
    coords = [(360 + (x - (min(xs) + max(xs)) / 2) * scale,
               180 + (y - (min(ys) + max(ys)) / 2) * scale) for x, y in zip(xs, ys)]
    path = " ".join(f"{x:.1f},{y:.1f}" for x, y in coords)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" role="img" aria-label="Pocari Sweat Run Bandung 2026 route">
<polyline points="{path}" fill="none" stroke="#d78343" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="{coords[0][0]:.1f}" cy="{coords[0][1]:.1f}" r="5" fill="#488b65" stroke="white" stroke-width="2"/>
<circle cx="{coords[-1][0]:.1f}" cy="{coords[-1][1]:.1f}" r="3" fill="#292b28" stroke="white" stroke-width="1"/>
</svg>'''
    preview = ROOT / "images/runs/pocari-bandung-2026-route.svg"
    preview.parent.mkdir(parents=True, exist_ok=True)
    preview.write_text(svg)
    print(json.dumps(summary, indent=2))
    print(f"Published {len(route)} minimal route points ({target.stat().st_size:,} bytes)")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("--rpe", required=True, help="Self-reported effort, e.g. 7/10")
    args = parser.parse_args()
    build(args.source, args.rpe)
