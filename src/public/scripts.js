// Establecer estado activo de ruta de la barra de navegación
const path = window.location.pathname;
const links = document.getElementsByClassName('nav-item');

for (let link of links) {
  if (path.includes(link.firstElementChild.getAttribute('href'))) {
    link.firstElementChild.classList.add('active');
    break;
  }
}
