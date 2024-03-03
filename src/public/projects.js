const { pathname, search } = window.location;
const projectsContainer = document.getElementById('projects-container');

function createListCards() {
  const listCards = document.createElement('div');
  listCards.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'm-0', 'g4');
  return listCards;
}

function createCard({ avatar, name, created_at, updated_at, description, _id, github, deploy, docs }) {
  const card = document.createElement('div');
  card.classList.add('col');
  const date = (date) => {
    const d = new Date(date)
    return `${d.getMonth() + 1}-${d.getFullYear()}`
  }

  card.innerHTML = `
    <div class="card h-100 text-white" style="background-color: #404040;">
      <img src="${avatar}" class="card-img-top h-50" alt="Avatar de ${name}"/>
      <div class="card-header text-end">${date(created_at)} - ${date(updated_at)}</div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          ${description}
        </p>
      </div>
      <div class="card-footer text-center">
        <a class="btn btn-primary mb-3" href="/project/${_id}">Más Información</a>
        <div class="d-flex justify-content-around" role="group">
          <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style="background-color: #ac2bac;" href="${github}" role="button" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="mdi:github"></iconify-icon>
          </a>

          ${
            deploy
              ? `
          <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style="background-color: #ac2bac;" href="${deploy}" role="button" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="mdi:web"></iconify-icon>
          </a>
          `
              : ''
          }
          
          ${
            docs
              ? `
          <a class="btn text-white btn-lg btn-floating" data-mdb-ripple-init style="background-color: #ac2bac;" href="${docs}" role="button" target="_blank" rel="noopener noreferrer">
            <iconify-icon icon="iconoir:google-docs"></iconify-icon>
          </a>
          `
              : ''
          }
        </div>
      </div>
    </div>
  `;
  return card;
}

fetch(`/api${pathname}${search}`)
  .then((value) => value.json())
  .then((value) => {
    // let data = '';
    if (!value.length) {
      projectsContainer.innerHTML = '<p>nada</p>';
    } else {
      const list = createListCards()
      for (let project of value) {
        const card = createCard(project)
        list.appendChild(card)
      }
      projectsContainer.replaceChildren(list)
    }
  })
  .catch((e) => {
    console.log(e)
    projectsContainer.innerHTML = `<p>${e.message}</p>`;
  });
