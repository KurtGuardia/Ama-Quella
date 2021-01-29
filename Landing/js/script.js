const menu = document.getElementById('menu');
const phoneNav = document.getElementById('phone-nav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselCards = document.querySelectorAll('.carousel__card');
const squares = document.querySelectorAll('.square');

let counter = 0;

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  phoneNav.classList.toggle('open');
});

prevBtn.addEventListener('click', () => {
  if (counter < 1) counter = 1;
  counter -= 1;

  [...carouselCards].forEach((card) => {
    card.style.transform = `translateX(-${counter * 110}%)`;
  });

  [...squares].forEach((square) => {
    if (+square.getAttribute('data-selected') === counter + 1) {
      square.classList.add('selected');
    } else if (+square.getAttribute('data-selected') !== counter + 1) {
      square.classList.remove('selected');
    }
  });
});

nextBtn.addEventListener('click', () => {
  if (counter > 4) counter = 4;
  counter += 1;

  [...carouselCards].forEach((card) => {
    card.style.transform = `translateX(-${counter * 110}%)`;
  });

  [...squares].forEach((square) => {
    if (+square.getAttribute('data-selected') === counter + 1) {
      square.classList.add('selected');
    } else if (+square.getAttribute('data-selected') !== counter + 1) {
      square.classList.remove('selected');
    }
  });
});
