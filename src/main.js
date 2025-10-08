'use strict';

const btn = document.querySelector('.find-btn');
const rabbit = document.querySelector('.rabbit');

btn.addEventListener('click', () => {
  rabbit.scrollIntoView({ block: 'center', behavior: 'smooth' });
});
