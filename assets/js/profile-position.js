// Keep the profile's sticky offset aligned with its initial page position.
(function () {
  const header = document.querySelector('.masthead');
  if (!header) return;

  function updateHeaderHeight() {
    document.documentElement.style.setProperty(
      '--site-header-height', header.getBoundingClientRect().height + 'px'
    );
  }

  updateHeaderHeight();
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(updateHeaderHeight).observe(header);
  } else {
    window.addEventListener('resize', updateHeaderHeight);
  }
})();
