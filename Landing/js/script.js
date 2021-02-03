const menu = document.getElementById('menu');
const phoneNav = document.getElementById('phone-nav');

// Phone Navigation sidebar
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  phoneNav.classList.toggle('open');
});
