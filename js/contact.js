// Contact page — builds a pre-filled mailto: from the form so it works on a
// static host with no backend (opens the visitor's email client).
const form = document.getElementById('contactForm');
const note = document.getElementById('contactNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const topic = (data.get('topic') || 'General').toString();
    const message = (data.get('message') || '').toString().trim();

    const subject = `[${topic}] Message from ${name || 'a visitor'}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Topic: ${topic}\n\n` +
      `${message}\n`;

    const href =
      `mailto:support@socialpulsecrm.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = href;

    if (note) {
      note.textContent =
        "Opening your email app… If nothing happens, email us directly at support@socialpulsecrm.com.";
    }
  });
}
