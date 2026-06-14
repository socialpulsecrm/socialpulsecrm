// Landing page entry point. Loaded as an ES module:
//   <script type="module" src="/js/main.js"></script>
import { initNav } from './nav.js';
import { initPricing } from './pricing.js';
import { initFaq } from './faq.js';
import { initReveal } from './reveal.js';

initNav();
initPricing();
initFaq();
initReveal();

// Keep the footer year current without touching markup.
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
