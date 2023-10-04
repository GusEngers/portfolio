function btnFilterChange(id) {
  const btnFilter = document.getElementById(id);
  btnFilter.style.backgroundColor = '#ffffff8f';
}

window.addEventListener('load', () => {
  const path = window.location.pathname;
  const projects = [
    '/proyectos',
    '/proyectos/full-stack',
    '/proyectos/back-end',
    '/proyectos/front-end',
    '/proyectos/otros',
  ];

  if (path === projects[0]) {
    btnFilterChange('filter-0');
  }
  if (path === projects[1]) {
    btnFilterChange('filter-1');
  }
  if (path === projects[2]) {
    btnFilterChange('filter-2');
  }
  if (path === projects[3]) {
    btnFilterChange('filter-3');
  }
  if (path === projects[4]) {
    btnFilterChange('filter-4');
  }
});
