// Pricing monthly / yearly toggle. Swaps any [data-monthly][data-yearly] text.
export function initPricing() {
  const monthlyBtn = document.getElementById('billMonthly');
  const yearlyBtn = document.getElementById('billYearly');
  if (!monthlyBtn && !yearlyBtn) return;

  const setPeriod = (period) => {
    const yearly = period === 'yearly';
    if (monthlyBtn) {
      monthlyBtn.classList.toggle('active', !yearly);
      monthlyBtn.setAttribute('aria-selected', String(!yearly));
    }
    if (yearlyBtn) {
      yearlyBtn.classList.toggle('active', yearly);
      yearlyBtn.setAttribute('aria-selected', String(yearly));
    }
    document.querySelectorAll('[data-monthly][data-yearly]').forEach((el) => {
      const val = yearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
      if (val !== null) el.textContent = val;
    });
  };

  if (monthlyBtn) monthlyBtn.addEventListener('click', () => setPeriod('monthly'));
  if (yearlyBtn) yearlyBtn.addEventListener('click', () => setPeriod('yearly'));
}
