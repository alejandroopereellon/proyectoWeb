// Toggle mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Load stored theme preference
if (localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  rootElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  const theme = rootElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// Projects filtering
const filters = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('[data-tags]');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      const tags = card.getAttribute('data-tags').split(',');
      if (tag === 'all' || tags.includes(tag)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Basic contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;
    if (!email.value.includes('@')) valid = false;
    if (message.value.trim() === '') valid = false;
    if (!valid) {
      e.preventDefault();
      alert('Por favor, completa correctamente el formulario.');
    }
  });
}
