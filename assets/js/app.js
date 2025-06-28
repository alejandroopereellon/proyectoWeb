// Toggle mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Dark mode toggle (supports varios botones con la clase .theme-toggle)
const themeButtons = document.querySelectorAll('.theme-toggle');
const rootElement = document.documentElement;

// Load stored theme preference
if (localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  rootElement.classList.add('dark');
}

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    rootElement.classList.toggle('dark');
    const theme = rootElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
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

// Typed.js hero effect
document.addEventListener('DOMContentLoaded', () => {
  const typedEl = document.getElementById('typed-text');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: ['Creo software que une datos y buenas experiencias.'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false
    });
  }

  const typedAbout = document.getElementById('typed-about');
  if (typedAbout && typeof Typed !== 'undefined') {
    new Typed('#typed-about', {
      strings: ['Mi trayectoria profesional'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false
    });
  }
});

// Botón volver arriba
const backTop = document.getElementById('back-to-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backTop.classList.remove('hidden');
    } else {
      backTop.classList.add('hidden');
    }
  });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Datos del currículum para generación dinámica
const cvData = {
  formacion: [
    'DAM 2025',
    'ASIR 2023',
    'Administración y Finanzas 2021'
  ],
  experiencia: [
    'Altia – Analista de datos (mar 2025-jun 2025)',
    'Alten – Técnico telecomunicaciones (mar 2023-jun 2023)',
    'McDonald\u2019s – Responsable experiencia cliente (nov 2021-dic 2024)',
    'Iuris Corporate – Gestión contable & RRHH (mar 2021-jun 2021)'
  ],
  habilidades: 'Java 17, Kotlin, JavaScript ES6, SQL/MariaDB, Power BI, Hibernate 6, Docker, Git/GitHub, Maven/Gradle, Linux, DAX, HTML, Bash scripting.',
  idiomas: 'Inglés A2 (lectura técnica fluida).',
  softSkills: 'Gestión de picos de trabajo, aprendizaje rápido, creatividad, adaptabilidad ágil.'
};

function renderSection(title, content) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.className = 'text-xl font-semibold mb-2';
  h2.textContent = title;
  section.appendChild(h2);
  if (Array.isArray(content)) {
    const ul = document.createElement('ul');
    ul.className = 'list-disc ml-6';
    content.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    section.appendChild(ul);
  } else {
    const p = document.createElement('p');
    p.textContent = content;
    section.appendChild(p);
  }
  return section;
}

function initCV() {
  const container = document.getElementById('cv-container');
  if (!container) return;
  container.appendChild(renderSection('Formación', cvData.formacion));
  container.appendChild(renderSection('Experiencia', cvData.experiencia));
  container.appendChild(renderSection('Habilidades', cvData.habilidades));
  container.appendChild(renderSection('Idiomas', cvData.idiomas));
  container.appendChild(renderSection('Soft Skills', cvData.softSkills));
}

document.addEventListener('DOMContentLoaded', initCV);
