'use strict';

const findBtn = document.querySelector('.find-btn');
const rabbit = document.querySelector('.rabbit');
const arrowUp = document.querySelector('.arrow-up');

findBtn.addEventListener('click', () => {
  rabbit.scrollIntoView({ block: 'center', behavior: 'smooth' });
});

arrowUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
