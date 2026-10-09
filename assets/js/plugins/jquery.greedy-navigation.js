/* Priority navigation: preserve every link, batch resize work, and support keyboards. */
(function () {
  'use strict';
  var nav = document.getElementById('site-nav');
  if (!nav) return;
  var button = nav.querySelector('.nav-menu-toggle');
  var visible = nav.querySelector('.visible-links');
  var overflow = nav.querySelector('.hidden-links');
  var scheduled = false;

  function closeMenu() {
    overflow.classList.add('hidden');
    button.classList.remove('close');
    button.setAttribute('aria-expanded', 'false');
  }

  function updateNav() {
    scheduled = false;
    // Restore source order before measuring; translated labels may change width.
    while (overflow.firstElementChild) visible.appendChild(overflow.firstElementChild);
    button.classList.add('hidden');
    var available = nav.clientWidth;
    if (visible.getBoundingClientRect().width > available) {
      button.classList.remove('hidden');
      available -= button.getBoundingClientRect().width + 12;
      while (visible.getBoundingClientRect().width > available && visible.children.length > 1) {
        var item = visible.lastElementChild;
        if (item.classList.contains('persist')) break;
        overflow.insertBefore(item, overflow.firstChild);
      }
    }
    if (!overflow.children.length) closeMenu();
  }

  function scheduleNav() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNav);
    }
  }

  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') !== 'true';
    overflow.classList.toggle('hidden', !open);
    button.classList.toggle('close', open);
    button.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target)) closeMenu();
  });
  nav.addEventListener('focusout', function (event) {
    if (!nav.contains(event.relatedTarget)) closeMenu();
  });
  window.addEventListener('resize', scheduleNav, { passive: true });
  if (window.ResizeObserver) new ResizeObserver(scheduleNav).observe(nav);
  updateNav();
})();
