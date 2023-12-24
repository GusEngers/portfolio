const headerButton = document.getElementById('header-button');
const filterButton = document.getElementById('filter-header-button');
const navbar = document.getElementById('nav-bar');
const filterbar = document.getElementById('filter-bar');

headerButton.onclick = function () {
  if (navbar.classList.contains('collapse-on')) {
    navbar.classList.replace('collapse-on', 'collapse-off');
  } else {
    if (filterbar !== null && filterbar.classList.contains('collapse-on')) {
      filterbar.classList.replace('collapse-on', 'collapse-off');
    }
    navbar.classList.replace('collapse-off', 'collapse-on');
  }
};

if(filterButton !== null) {
  filterButton.onclick = function () {
    if (filterbar.classList.contains('collapse-on')) {
      filterbar.classList.replace('collapse-on', 'collapse-off');
    } else {
      if (navbar.classList.contains('collapse-on')) {
        navbar.classList.replace('collapse-on', 'collapse-off');
      }
      filterbar.classList.replace('collapse-off', 'collapse-on');
    }
  };
}
