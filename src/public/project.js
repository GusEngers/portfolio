const { pathname } = window.location;
const projectContainer = document.getElementById('project-container');

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
    <div class="cardh-100 text-white">
      <img src="${props.avatar}" class="card-img-top" alt="Avatar de ${props.name}"/>
      <div class="card-header text-end text-secondary fst-italic bg-dark">${dateFormater(props.created_at)} / ${dateFormater(props.updated_at)}</div>
      <div class="card-body">
        <h5 class="card-title text-primary">${props.name}</h5>
        <h6 class="card-subtitle mb-2 text-secondary text-uppercase">${props.type}</h6>
        <p class="card-text">
          ${props.description}
        </p>
      </div>
      <div class="card-footer text-center bg-dark">
        <a class="btn btn-outline-primary btn-lg mb-2" title="Más información de ${props.name}" href="/project/${props._id}">Más Información</a>
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

fetch(`/api${pathname}`)
  .then((response) => response.json())
  .then((value) => {
    if (value.message && value.statusCode) {
      projectContainer.innerHTML = errorMessage(value.message, value.statusCode);
    } else {
      const dateFormater = (date) => {
        const d = new Date(date);
        return `${String(d.getDate() + 1).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
      };

      projectContainer.innerHTML = `
        <div class="card h-100 text-white">
          <img src="${value.avatar}" class="card-img-top h-30" alt="Avatar de ${value.name}"/>
          <h5 class="card-title text-primary fs-1">${value.name}</h5>
          <h6 class="card-subtitle mb-2 text-secondary text-uppercase">${value.type}</h6>
          <div class="card-body row row-cols-1 row-cols-md-2 m-2 justify-content-center">
            <div class="d-flex flex-column align-items-center">
              <h6 class="card-subtitle mb-2 text-uppercase fs-4">Descripción</h6>
              <p class="card-text text-center text-md-start">
                ${value.description}
              </p>
              <p class="card-text text-start w-100">
                <span class="text-uppercase">Fecha de Inicio:</span> ${dateFormater(value.created_at)}
              </p>
              <p class="card-text text-start w-100 mb-2">
                <span class="text-uppercase">Última modificación:</span> ${dateFormater(value.updated_at)}
              </p>
            </div>
            <div class="d-flex flex-column align-items-center">
              ${listTechs(value.techs)}
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch((e) => {
    projectContainer.innerHTML = errorMessage('Ocurrió un error inesperado', 500);
  });

function listTechs(techs) {
  const container = document.createElement('div');

  const title = document.createElement('h6');
  title.textContent = 'Tecnologías';
  title.classList.add('card-subtitle', 'mb-2', 'text-uppercase', 'text-center', 'fs-4');
  container.appendChild(title);

  const list = document.createElement('div');
  list.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-center', 'align-items-start', 'mb-2');
  for (let tech of techs) {
    const item = document.createElement('a');
    item.href = `/projects?tech=${tech._id}`;
    item.classList.add('btn', 'btn-primary', 'btn-floating', 'icon-button-link');
    item.innerHTML = `<iconify-icon title="Buscar proyectos con ${tech.name}" icon="${tech.icon}" class="icon-button-icon"></iconify-icon>`;
    list.appendChild(item);
  }
  container.appendChild(list);
  return container.innerHTML;
}

// <a href="/projects?tech=<%= tech._id %>" class="btn btn-primary btn-floating icon-button-link">
//                 <iconify-icon title="Buscar proyectos con <%= tech.name %>" icon="<%= tech.icon %>" class="icon-button-icon"></iconify-icon>
//               </a>
