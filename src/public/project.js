const { pathname } = window.location;
const projectContainer = document.getElementById('project-container');

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
        <div class="row row-cols-1 row-cols-md-2 text-white pt-4">
          <img src="${value.avatar}" alt="Avatar de ${value.name}" />
          <div class="d-flex flex-column align-items-center align-items-md-start">
            <h1 class="mb-2 text-uppercase text-primary fs-3 text-center text-md-start">${value.name}</h1>
            <a
              href="/projects/${value.type === 'otros' ? 'other' : value.type}"
              class="text-secondary text-uppercase"
              title="Ver proyectos ${value.type}"
            >${value.type}</a>
            <p class="text-center text-md-start">
              ${value.description}
            </p>
            <p class="text-start w-100 d-flex justify-content-between justify-content-md-start"><span class="text-uppercase fw-bold">Fecha de inicio:</span> <span>${dateFormater(
              value.created_at
            )}</span></p>
            <p class="text-start w-100 d-flex justify-content-between justify-content-md-start"><span class="text-uppercase fw-bold">Última modificación:</span> <span>${dateFormater(
              value.updated_at
            )}</span></p>
          </div>
        </div>
        
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Tecnologías Usadas
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                <p>Para la construcción de este proyecto se utilizaron principalmente estas tecnologías:</p>
                <div class="container d-flex flex-wrap justify-content-center align-items-center mt-3">
                  ${listTechs(value.techs)}
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Principales Características
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                <ul class="list-group list-group-light list-group-small">
                  ${listFeatures(value.features)}
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accesos Disponibles
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                <p>El proyecto cuenta con los siguientes accesos donde se podrá revisar el código fuente y además, en caso de estar disponible, su página web y documentación:</p>
                <div class="btn-group">
                  <a class="btn btn-outline-primary btn-lg d-flex align-items-center flex-wrap justify-content-center" data-mdb-ripple-init href="${value.github}" role="button" target="_blank" rel="noopener noreferrer">
                    <iconify-icon icon="mdi:github" style="padding-right: 0.5rem;" class="icon-button-icon"></iconify-icon>
                    Repositorio
                  </a>

                  ${ value.deploy ?
                    `<a class="btn btn-outline-primary btn-lg d-flex align-items-center flex-wrap justify-content-center" data-mdb-ripple-init href="${value.deploy}" role="button" target="_blank" rel="noopener noreferrer">
                      <iconify-icon icon="mdi:web" style="padding-right: 0.5rem;" class="icon-button-icon"></iconify-icon>
                      Sitio Web
                    </a>` : ''
                  }
                  
                  ${ value.docs ?
                    `<a class="btn btn-outline-primary btn-lg d-flex align-items-center flex-wrap justify-content-center" data-mdb-ripple-init href="${value.docs}" role="button" target="_blank" rel="noopener noreferrer">
                      <iconify-icon icon="iconoir:google-docs" style="padding-right: 0.5rem;" class="icon-button-icon"></iconify-icon>
                      Documentación
                    </a>` : ''
                  }
                </div>
              </div>
            </div>
          </div>
          
          ${ value.images.length ?
            `<div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  data-mdb-collapse-init
                  class="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Imágenes Adicionales
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-mdb-parent="#accordionFlushExample"
              >
                <div class="accordion-body text-white">
                  <p>Se puede observar distintas partes de la interfaz de usuario del proyecto en las siguientes imágenes:</p>
                  ${listImages(value.images, value.name)}
                </div>
              </div>
            </div>` : ''
          }
        </div>
      `;
    }
  })
  .catch((e) => {
    console.log(e);
    projectContainer.innerHTML = errorMessage('Ocurrió un error inesperado', 500);
  });

function listTechs(techs) {
  const container = document.createElement('div');

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

function listFeatures(features) {
  const container = document.createElement('ul');
  for (let feature of features) {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'text-white', 'border-0');
    item.textContent = feature;
    container.appendChild(item);
  }
  return container.innerHTML;
}

function listImages(images, name) {
  let data = '';
  for (let i = 0; i < images.length; i++) {
    data += `<img src="${images[i]}" class="d-block w-100 m-2" alt="Imágen adicional ${i + 1} de ${name}"/>`;
  }
  return data;
}
