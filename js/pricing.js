// Pricing monthly/yearly, USD/INR, and Creator/Brand/Agency plan toggle.
export function initPricing() {
  const billMonthly = document.getElementById('billMonthly');
  const billYearly = document.getElementById('billYearly');
  const currUsd = document.getElementById('currUsd');
  const currInr = document.getElementById('currInr');
  const prodCreator = document.getElementById('prodCreator');
  const prodBrand = document.getElementById('prodBrand');
  const prodAgency = document.getElementById('prodAgency');
  const pricingGrid = document.getElementById('pricingGrid');

  if (!pricingGrid) return;

  // Initial state
  let cycle = 'monthly';
  let currency = 'usd';
  let product = 'creator';

  const update = () => {
    // 1. Update button active classes & aria-selected attributes
    if (billMonthly) {
      billMonthly.classList.toggle('active', cycle === 'monthly');
      billMonthly.setAttribute('aria-selected', String(cycle === 'monthly'));
    }
    if (billYearly) {
      billYearly.classList.toggle('active', cycle === 'yearly');
      billYearly.setAttribute('aria-selected', String(cycle === 'yearly'));
    }

    if (currUsd) {
      currUsd.classList.toggle('active', currency === 'usd');
      currUsd.setAttribute('aria-selected', String(currency === 'usd'));
    }
    if (currInr) {
      currInr.classList.toggle('active', currency === 'inr');
      currInr.setAttribute('aria-selected', String(currency === 'inr'));
    }

    if (prodCreator) {
      prodCreator.classList.toggle('active', product === 'creator');
      prodCreator.setAttribute('aria-selected', String(product === 'creator'));
    }
    if (prodBrand) {
      prodBrand.classList.toggle('active', product === 'brand');
      prodBrand.setAttribute('aria-selected', String(product === 'brand'));
    }
    if (prodAgency) {
      prodAgency.classList.toggle('active', product === 'agency');
      prodAgency.setAttribute('aria-selected', String(product === 'agency'));
    }

    // 2. Adjust Grid Columns (Creator gets 3 cards, Enterprise plans get 1 centered card)
    if (product === 'creator') {
      pricingGrid.classList.add('pgrid--triple');
      pricingGrid.classList.remove('pgrid--single');
    } else {
      pricingGrid.classList.add('pgrid--single');
      pricingGrid.classList.remove('pgrid--triple');
    }

    // 3. Show/hide plan cards based on selected product type
    document.querySelectorAll('.plan-card').forEach((card) => {
      const cardProd = card.getAttribute('data-product');
      if (cardProd === product) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // 4. Update prices dynamically
    document.querySelectorAll('.price-val').forEach((el) => {
      const attr = `data-${currency}-${cycle}`;
      const val = el.getAttribute(attr);
      if (val !== null) el.textContent = val;
    });

    // 5. Update billing cycle text (/mo vs /yr)
    document.querySelectorAll('.price-period').forEach((el) => {
      const attr = `data-${cycle}`;
      const val = el.getAttribute(attr);
      if (val !== null) el.textContent = val;
    });

    // 6. Update monthly equivalent subtitles (e.g. "That's just $24/mo")
    document.querySelectorAll('.plan-monthly-eq').forEach((el) => {
      if (cycle === 'yearly') {
        const attr = `data-${currency}-yearly`;
        const val = el.getAttribute(attr);
        if (val) {
          el.textContent = val;
        } else {
          el.innerHTML = '&nbsp;';
        }
      } else {
        el.innerHTML = '&nbsp;';
      }
    });

    // 7. Update dynamic seat texts for Brand and Agency
    document.querySelectorAll('.seat-text').forEach((el) => {
      const attr = `data-${currency}-${cycle}`;
      const val = el.getAttribute(attr);
      if (val !== null) el.textContent = val;
    });
  };

  // Bind Event Listeners
  if (billMonthly) billMonthly.addEventListener('click', () => { cycle = 'monthly'; update(); });
  if (billYearly) billYearly.addEventListener('click', () => { cycle = 'yearly'; update(); });
  if (currUsd) currUsd.addEventListener('click', () => { currency = 'usd'; update(); });
  if (currInr) currInr.addEventListener('click', () => { currency = 'inr'; update(); });
  if (prodCreator) prodCreator.addEventListener('click', () => { product = 'creator'; update(); });
  if (prodBrand) prodBrand.addEventListener('click', () => { product = 'brand'; update(); });
  if (prodAgency) prodAgency.addEventListener('click', () => { product = 'agency'; update(); });

  // Initial render
  update();
}

