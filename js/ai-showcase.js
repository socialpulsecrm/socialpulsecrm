// AI Agents Showcase: Category filtering & tab management
export function initAiShowcase() {
  const tabs = document.querySelectorAll('.ai-tab');
  const cards = document.querySelectorAll('.acard');
  const countEl = document.getElementById('aiFilteredCount');

  if (!tabs.length || !cards.length) return;

  function setSuite(suite) {
    // 1. Update tab active states
    tabs.forEach((tab) => {
      const isMatch = tab.getAttribute('data-suite') === suite;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', String(isMatch));
    });

    // 2. Filter agent cards
    let visibleCount = 0;
    cards.forEach((card) => {
      const cardSuite = card.getAttribute('data-suite');
      if (suite === 'all' || cardSuite === suite) {
        card.style.display = 'flex';
        // Trigger subtle animation
        card.classList.remove('acard--fade-in');
        void card.offsetWidth; // force reflow
        card.classList.add('acard--fade-in');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countEl) {
      countEl.textContent = String(visibleCount);
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const suite = tab.getAttribute('data-suite') || 'all';
      setSuite(suite);
    });
  });
}
