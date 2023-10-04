function btnChange(id) {
  const btn = document.getElementById(id);
  btn.style.borderBottom = '1px solid #ffffff';
  btn.addEventListener('mouseover', () => {
    btn.style.borderBottom = 'none';
  });
  btn.addEventListener('mouseout', () => {
    btn.style.borderBottom = '1px solid #ffffff';
  });
}

window.addEventListener('load', () => {
  const path = window.location.pathname;
  const projects_nav = [
    '/proyectos',
    '/proyectos/full-stack',
    '/proyectos/back-end',
    '/proyectos/front-end',
    '/proyectos/otros',
  ];

  if (path === '/') {
    btnChange('nav-0');
  }
  if (projects_nav.includes(path)) {
    btnChange('nav-1');
  }
  if (path === '/sobre-mi') {
    btnChange('nav-2');
  }
  if (path === '/contacto') {
    btnChange('nav-3');
  }
});
