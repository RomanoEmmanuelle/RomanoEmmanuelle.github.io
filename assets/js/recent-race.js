(function () {
  'use strict';
  var section = document.querySelector('.recent-race');
  if (!section) return;
  var mapElement = document.getElementById('recent-race-map');
  var chart = document.getElementById('recent-race-elevation');
  var readout = document.getElementById('elevation-readout');
  var reset = section.querySelector('.recent-race__reset');
  var svgNS = 'http://www.w3.org/2000/svg';
  var map, routeCursor, points, selected = 0, plot, cursorLine, cursorDot;

  function svgElement(tag, attributes, text) {
    var element = document.createElementNS(svgNS, tag);
    Object.keys(attributes).forEach(function (key) { element.setAttribute(key, attributes[key]); });
    if (text !== undefined) element.textContent = text;
    chart.appendChild(element);
    return element;
  }

  function showPoint(index) {
    selected = Math.max(0, Math.min(points.length - 1, index));
    var point = points[selected];
    var text = point[3].toFixed(2) + ' km · ' + Math.round(point[2]) + ' m';
    readout.textContent = text;
    chart.setAttribute('aria-label', 'Elevation profile: ' + text);
    if (plot) {
      var x = plot.x(point[3]), y = plot.y(point[2]);
      cursorLine.setAttribute('x1', x);
      cursorLine.setAttribute('x2', x);
      cursorDot.setAttribute('cx', x);
      cursorDot.setAttribute('cy', y);
    }
    if (routeCursor) routeCursor.setLatLng([point[0], point[1]]);
  }

  function drawElevation() {
    var width = Math.max(260, chart.clientWidth), height = 190;
    var left = 40, right = width - 14, top = 18, bottom = height - 30;
    var elevations = points.map(function (p) { return p[2]; });
    var low = Math.floor(Math.min.apply(null, elevations) / 25) * 25;
    var high = Math.ceil(Math.max.apply(null, elevations) / 25) * 25;
    if (high === low) high = low + 25;
    var distance = points[points.length - 1][3];
    chart.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    chart.replaceChildren();
    plot = {
      x: function (km) { return left + km / distance * (right - left); },
      y: function (m) { return bottom - (m - low) / (high - low) * (bottom - top); },
      left: left, right: right, distance: distance
    };
    [low, (low + high) / 2, high].forEach(function (value) {
      var y = plot.y(value);
      svgElement('line', {x1: left, x2: right, y1: y, y2: y, stroke: 'var(--global-border-color)'});
      svgElement('text', {x: left - 8, y: y + 4, 'text-anchor': 'end', fill: 'var(--global-text-color-light)', 'font-size': 11}, Math.round(value) + '');
    });
    svgElement('text', {x: 4, y: 10, fill: 'var(--global-text-color-light)', 'font-size': 11}, 'm');
    var ticks = width < 450 ? 3 : 5;
    for (var i = 0; i <= ticks; i++) {
      var km = distance * i / ticks;
      svgElement('text', {x: plot.x(km), y: height - 7, 'text-anchor': i === ticks ? 'end' : (i === 0 ? 'start' : 'middle'), fill: 'var(--global-text-color-light)', 'font-size': 11}, (i === 0 ? '0' : km.toFixed(1)) + ' km');
    }
    var coordinates = points.map(function (p) { return plot.x(p[3]).toFixed(1) + ',' + plot.y(p[2]).toFixed(1); }).join(' ');
    svgElement('polygon', {points: left + ',' + bottom + ' ' + coordinates + ' ' + right + ',' + bottom, fill: 'var(--global-link-color)', opacity: 0.12});
    svgElement('polyline', {points: coordinates, fill: 'none', stroke: 'var(--global-link-color)', 'stroke-width': 2, 'stroke-linejoin': 'round'});
    cursorLine = svgElement('line', {y1: top, y2: bottom, stroke: 'var(--global-text-color-light)', 'stroke-dasharray': '3 4'});
    cursorDot = svgElement('circle', {r: 4, fill: 'var(--global-link-color)', stroke: 'var(--global-bg-color)', 'stroke-width': 2});
    showPoint(selected);
  }

  function selectFromPointer(event) {
    if (!plot) return;
    var box = chart.getBoundingClientRect();
    var km = Math.max(0, Math.min(plot.distance, (event.clientX - box.left - plot.left) / (plot.right - plot.left) * plot.distance));
    var lo = 0, hi = points.length - 1;
    while (lo < hi) {
      var middle = Math.floor((lo + hi) / 2);
      if (points[middle][3] < km) lo = middle + 1;
      else hi = middle;
    }
    showPoint(lo);
  }

  function loadMap() {
    var script = document.createElement('script');
    script.src = '/assets/vendor/leaflet/leaflet.js';
    script.onload = function () {
      mapElement.replaceChildren();
      map = L.map(mapElement, {scrollWheelZoom: false, preferCanvas: true, zoomSnap: 0.5});
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      var latlngs = points.map(function (p) { return [p[0], p[1]]; });
      L.polyline(latlngs, {color: '#fff', weight: 7, opacity: 0.85, interactive: false}).addTo(map);
      var route = L.polyline(latlngs, {color: '#bd632b', weight: 3.5, opacity: 1}).addTo(map);
      L.circleMarker(latlngs[0], {radius: 7, color: '#fff', weight: 2, fillColor: '#488b65', fillOpacity: 1}).addTo(map).bindTooltip('Start');
      L.circleMarker(latlngs[latlngs.length - 1], {radius: 5, color: '#fff', weight: 2, fillColor: '#292b28', fillOpacity: 1}).addTo(map).bindTooltip('Finish');
      routeCursor = L.circleMarker(latlngs[selected], {radius: 5, color: '#292b28', weight: 2, fillColor: '#fff', fillOpacity: 1, interactive: false}).addTo(map);
      function fitRoute() { map.fitBounds(route.getBounds(), {padding: [24, 24], animate: false}); }
      fitRoute();
      reset.hidden = false;
      reset.addEventListener('click', fitRoute);
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(function () { map.invalidateSize({pan: false}); }).observe(mapElement);
      }
    };
    // The static breadcrumb remains visible if the mapping library is unavailable.
    document.head.appendChild(script);
  }

  fetch(section.dataset.runSrc).then(function (response) {
    if (!response.ok) throw new Error('Route data unavailable');
    return response.json();
  }).then(function (data) {
    points = data.points;
    if (!Array.isArray(points) || points.length < 2) throw new Error('Empty route');
    drawElevation();
    chart.addEventListener('pointermove', selectFromPointer);
    chart.addEventListener('pointerdown', selectFromPointer);
    chart.addEventListener('keydown', function (event) {
      var next = {ArrowLeft: selected - 10, ArrowRight: selected + 10, Home: 0, End: points.length - 1}[event.key];
      if (next === undefined) return;
      event.preventDefault();
      showPoint(next);
    });
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(drawElevation).observe(chart);
    else window.addEventListener('resize', drawElevation);
    if (typeof IntersectionObserver !== 'undefined') {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { observer.disconnect(); loadMap(); }
      }, {rootMargin: '250px'});
      observer.observe(mapElement);
    } else loadMap();
  }).catch(function () {
    readout.textContent = 'Route data could not be loaded.';
  });
})();
