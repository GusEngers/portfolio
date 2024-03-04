const { pathname, search } = window.location;
const projectsContainer = document.getElementById('projects-container');

/**
 * Genera un elemento HTML donde se alojarán las distintas `card`
 * @returns Contenedor de `card`
 */
function createListCards() {
  const listCards = document.createElement('div');
  listCards.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'm-0', 'g-4', 'mb-4');
  return listCards;
}

/**
 * Genera un elemento HTML con todos sus componentes hijos formando una `card`
 * @param props Datos necesarios para generar un `card`
 * @returns Card generada
 */
function createCard(props) {
  /**
   * Genera un texto en formato MM-AAAA
   * @param {string} date Fecha para formatear
   * @returns Texto formateado
   */
  const dateFormater = (date) => {
    const d = new Date(date);
    return `${String(d.getDate() + 1).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
  };

  /**
   * Genera un botón para enlaces externos
   * @param {string} href Dirección de redirección
   * @param {string} icon Código de icono
   * @param {string} title Título del enlace
   * @returns Botón de enlace
   */
  const iconElement = (href, icon, title) => {
    return `
      <a class="btn btn-outline-primary text-primary icon-button-link btn-lg btn-floating" data-mdb-ripple-init href="${href}" role="button" title="${title}" target="_blank" rel="noopener noreferrer">
        <iconify-icon icon="${icon}" class="icon-button-icon"></iconify-icon>
      </a>
    `;
  };

  const card = document.createElement('div');
  card.classList.add('col');

  card.innerHTML = `
    <div class="card h-100 text-white bg-dark">
      <img src="${props.avatar}" class="card-img-top" alt="Avatar de ${props.name}"/>
      <div class="card-header text-end text-secondary fst-italic">${dateFormater(props.created_at)} / ${dateFormater(props.updated_at)}</div>
      <div class="card-body">
        <h5 class="card-title text-primary">${props.name}</h5>
        <h6 class="card-subtitle mb-2 text-secondary text-uppercase">${props.type}</h6>
        <p class="card-text">
          ${props.description}
        </p>
      </div>
      <div class="card-footer text-center">
        <a class="btn btn-outline-primary btn-lg mb-3" title="Más informacioón de ${props.name}" href="/project/${props._id}">Más Información</a>
        <div class="d-flex justify-content-around" role="group">
          ${iconElement(props.github, 'mdi:github', `Repositorio de ${props.name}`)}
          ${props.deploy ? iconElement(props.deploy, 'mdi:web', `Sitio Web de ${props.name}`) : ''}
          ${props.docs ? iconElement(props.docs, 'iconoir:google-docs', `Documentación de ${props.name}`) : ''}
        </div>
      </div>
    </div>
  `;
  return card;
}

/**
 * Crea los elementos para mostrar en una página de error
 * @param {string} message Mensaje de error
 * @param {number} statusCode Código de estado HTTP
 * @returns Elementos creados
 */
function errorMessage(message, statusCode = 400) {
  return `
    <h1 id="home-title" class="mb-3 text-primary text-uppercase">${statusCode}</h1>
    <h2 class="mb-3 text-uppercase text-white">¡Lo sentimos!</h2>
    <p class="text-white">${message}</p>
    <a class="btn btn-outline-primary btn-lg" href="/">Volver al Inicio</a>
  `;
}

fetch(`/api${pathname}${search}`)
  .then((response) => response.json())
  .then((value) => {
    if(value.message && value.statusCode) {
      projectsContainer.innerHTML = errorMessage(value.message, value.statusCode);
    } else {
      const projects = value.projects;
      if (!projects.length) {
        projectsContainer.innerHTML = errorMessage('No hay resultados para esta búsqueda', 404);
      } else {
        const list = createListCards();
        for (let project of projects) {
          const card = createCard(project);
          list.appendChild(card);
        }
        const title = document.createElement('h1');
        title.classList.add('m-3', 'pt-3', 'text-primary');
        title.textContent = `Viendo: ${value.title}`;
        projectsContainer.replaceChildren(title);
        projectsContainer.appendChild(list);
      }
    }
  })
  .catch((e) => {
    projectsContainer.innerHTML = errorMessage('Ocurrió un error inesperado', 500);
  });
