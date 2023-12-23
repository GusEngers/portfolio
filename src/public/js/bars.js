const headerButton = document.getElementById('header-button');
const navbar = document.getElementById('nav-bar');

headerButton.onclick = function () {
  if (navbar.classList.contains('collapse-on')) {
    navbar.classList.replace('collapse-on', 'collapse-off');
  } else {
    navbar.classList.replace('collapse-off', 'collapse-on');
  }
};
