(function() {
  const STORAGE_KEY = 'minimal-theme';
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function getPreferredTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function init() {
    setTheme(getPreferredTheme());

    if (toggle) {
      toggle.addEventListener('click', function() {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
