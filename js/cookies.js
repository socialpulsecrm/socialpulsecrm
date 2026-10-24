/**
 * Cookie consent banner initialization.
 * Persists user preference to localStorage and respects strict privacy guidelines.
 */
export function initCookieBanner() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const consent = localStorage.getItem('crms_cookie_consent');
  if (consent) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie Consent');
  banner.setAttribute('aria-live', 'polite');

  banner.innerHTML = `
    <div class="cookie-banner__header">
      <svg class="cookie-banner__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
      <h3 class="cookie-banner__title">Cookie &amp; Privacy Choices</h3>
    </div>
    <p class="cookie-banner__text">
      We use strictly necessary cookies to keep you securely signed in and privacy-preserving first-party cookies to improve our platform. We never deploy third-party ad tracking cookies or sell personal data. Review our <a href="/cookies/">Cookie Policy</a>.
    </p>
    <div class="cookie-banner__actions">
      <button type="button" class="cookie-banner__btn-accept" id="cookie-accept-all">Accept all</button>
      <button type="button" class="cookie-banner__btn-necessary" id="cookie-accept-necessary">Strictly necessary only</button>
    </div>
  `;

  document.body.appendChild(banner);

  const acceptAllBtn = banner.querySelector('#cookie-accept-all');
  const acceptNecBtn = banner.querySelector('#cookie-accept-necessary');

  const closeBanner = (choice) => {
    try {
      localStorage.setItem('crms_cookie_consent', choice);
    } catch {
      // localStorage might be unavailable in private browsing mode
    }
    banner.style.animation = 'none';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(20px)';
    banner.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    setTimeout(() => {
      banner.remove();
    }, 200);
  };

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => closeBanner('all'));
  }
  if (acceptNecBtn) {
    acceptNecBtn.addEventListener('click', () => closeBanner('necessary'));
  }
}
