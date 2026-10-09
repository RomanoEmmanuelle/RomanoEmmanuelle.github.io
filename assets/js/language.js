(function () {
  'use strict';

  var translations = JSON.parse(document.getElementById('site-translations').textContent);
  var control = document.getElementById('site-language');
  if (!control) return;
  var entries = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var node;

  // Keep the original text nodes so switching languages preserves links and markup.
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest('script, style, pre, code, math, .MathJax, #site-language, [data-language]')) continue;
    var original = node.nodeValue;
    var key = original.trim().replace(/\s+/g, ' ');
    if (Object.prototype.hasOwnProperty.call(translations, key)) {
      entries.push({ node: node, original: original, japanese: original.replace(original.trim(), translations[key]) });
    }
  }

  var attributes = [];
  document.querySelectorAll('[alt], [aria-label], [title]').forEach(function (element) {
    ['alt', 'aria-label', 'title'].forEach(function (name) {
      var original = element.getAttribute(name);
      if (Object.prototype.hasOwnProperty.call(translations, original)) {
        attributes.push({ element: element, name: name, original: original, japanese: translations[original] });
      }
    });
  });

  var originalTitle = document.title;
  function applyLanguage(language) {
    var japanese = language === 'ja';
    document.documentElement.lang = japanese ? 'ja' : 'en';
    control.textContent = japanese ? '日本語' : 'EN';
    control.lang = japanese ? 'ja' : 'en';
    control.setAttribute('aria-label', japanese ? 'Switch to English' : 'Switch to Japanese');
    control.title = japanese ? 'Switch to English' : 'Switch to Japanese';
    document.querySelectorAll('[data-language]').forEach(function (element) {
      element.hidden = element.dataset.language !== (japanese ? 'ja' : 'en');
    });
    entries.forEach(function (entry) { entry.node.nodeValue = japanese ? entry.japanese : entry.original; });
    attributes.forEach(function (entry) { entry.element.setAttribute(entry.name, japanese ? entry.japanese : entry.original); });
    document.title = originalTitle;
    if (japanese) {
      var heading = document.querySelector('.page__title');
      if (heading) document.title = heading.textContent.trim() + ' - Romano Emmanuelle';
    }
    // The translated menu labels can have different widths.
    window.dispatchEvent(new Event('resize'));
  }

  var savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('site-language') || 'en'; } catch (error) { /* Storage may be disabled. */ }
  applyLanguage(savedLanguage);
  control.addEventListener('click', function () {
    var language = document.documentElement.lang === 'ja' ? 'en' : 'ja';
    applyLanguage(language);
    try { localStorage.setItem('site-language', language); } catch (error) { /* Switching still works without storage. */ }
  });
  window.addEventListener('storage', function (event) {
    if (event.key === 'site-language') applyLanguage(event.newValue);
  });
})();
