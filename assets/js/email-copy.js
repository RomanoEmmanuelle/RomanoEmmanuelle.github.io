document.querySelectorAll('[data-copy-email]').forEach(function (button) {
  button.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      window.alert('email copied!');
    } catch (error) {
      window.prompt('Copy this email address:', button.dataset.copyEmail);
    }
  });
});
