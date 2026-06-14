// FAQ accordion — single-open behavior with smooth height.
export function initFaq() {
  const items = document.querySelectorAll('.faq__item');
  items.forEach((item) => {
    const btn = item.querySelector('.faq__q');
    const ans = item.querySelector('.faq__a');
    if (!btn || !ans) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close any other open item for a clean single-open accordion.
      document.querySelectorAll('.faq__item.open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          const ob = other.querySelector('.faq__q');
          const oa = other.querySelector('.faq__a');
          if (ob) ob.setAttribute('aria-expanded', 'false');
          if (oa) oa.style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      ans.style.maxHeight = !isOpen ? `${ans.scrollHeight}px` : null;
    });
  });
}
