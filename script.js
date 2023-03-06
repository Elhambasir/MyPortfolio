const nav = document.querySelector('.toolbar');
const headline = document.querySelector('.headline');
const btn_menu = document.querySelector('.btn-menu')
const btn_close = document.querySelector('.btn-close');

btn_menu.onclick = function show() {
  nav.classList.add('display');
  headline.classList.add('position');
};

btn_close.onclick = function show() {
  nav.classList.remove('display');
};