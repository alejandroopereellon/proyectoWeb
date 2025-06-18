// Pequeño script para desplazar suavemente al hacer clic en las secciones
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
