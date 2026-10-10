/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

/*jslint es6 */
'use strict';

// Constants for CDNs
const PLOTLY_URL = "https://cdn.jsdelivr.net/npm/plotly.js@3.6.0/dist/plotly.min.js";
const MERMAID_URL = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

// Storage can be disabled by browser privacy settings.
function savedTheme() {
  try { return localStorage.getItem("theme"); } catch (error) { return null; }
}

function determineComputedTheme() {
  const setting = savedTheme();
  if (setting === "dark" || setting === "light") return setting;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
}

function setTheme(theme) {
  const computed = theme || determineComputedTheme();
  if (computed === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.classList.toggle("fa-moon", computed === "dark");
    icon.classList.toggle("fa-sun", computed !== "dark");
  }
}

function toggleTheme() {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", theme); } catch (error) {}
  setTheme(theme);
  redrawPlotly();
}

// Defer the loading of Mermaid to only if there is a field on the page to be rendered
let mermaidElements = document.querySelectorAll("pre>code.language-mermaid");
if (mermaidElements.length > 0) {
  (function () {
    // Append the Mermaid module once; this bundle runs after parsing the page
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import mermaid from '${MERMAID_URL}';
      mermaid.initialize({startOnLoad:true, theme:'default'});
      await mermaid.run({querySelector:'code.language-mermaid'});
    `;
    document.body.appendChild(moduleScript);
  })();
}

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is
// actually present on the page.
//
// NOTE that plotlyDarkLayout and plotlyLightLayout will be exposed in the minimized file
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  (function () {
    // Prepare to load Plotly from the CDN
    const script = document.createElement('script');
    script.src = PLOTLY_URL;
    script.async = true;

    // Once loaded, update the page elements to work with it
    script.onload = function() {
      plotlyElements.forEach(function(elem) {
        // Parse the Plotly JSON data and hide it
        let jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }

    // Add the script to the document
    document.head.appendChild(script);
  })();
}

function redrawPlotly() {
  if (!window.Plotly) return;
  plotlyElements.forEach(function(elem) {
    // Parse the Plotly JSON data
    let jsonData = JSON.parse(elem.textContent);

    // Get the Plotly node
    let chartElement = $(elem).parent().next().get(0);
    if (!chartElement) return;

    // Set the theme for the plot and render it
    const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
    if (jsonData.layout) {
      jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
    } else {
      jsonData.layout = { template: theme };
    }
    Plotly.react(chartElement, jsonData.data, jsonData.layout);
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!savedTheme() || savedTheme() === "system") {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    const open = this.getAttribute("aria-expanded") !== "true";
    this.setAttribute("aria-expanded", String(open));
    this.classList.toggle("open", open);
  });

  // CSS controls the desktop/mobile display; no inline styles survive a resize.
  window.matchMedia('(min-width: 925px)').addEventListener('change', function () {
    document.querySelectorAll('.author__urls-wrapper button').forEach(function (button) {
      button.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === "theme") {
      setTheme();
      redrawPlotly();
    }
  });
});
