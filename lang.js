/**
 * Luminary — Bilingual Toggle Engine
 * Switches between English (LTR) and Arabic (RTL)
 * Uses data-en / data-ar attributes on any element
 */

(function () {
  const STORAGE_KEY = 'luminary_lang';

  function applyLang(lang) {
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (!text) return;
      // Use innerHTML for elements that may contain tags
      if (text.includes('<')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Update toggle button label
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'ar' ? 'English' : 'عربي';

    // Persist
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
  }

  function toggleLang() {
    const current = document.documentElement.getAttribute('lang') || 'en';
    applyLang(current === 'en' ? 'ar' : 'en');
  }

  // Expose globally
  window.toggleLang = toggleLang;

  // On load: restore saved language
  document.addEventListener('DOMContentLoaded', function () {
    let saved = 'en';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'en'; } catch(e) {}
    if (saved === 'ar') applyLang('ar');
  });
})();
