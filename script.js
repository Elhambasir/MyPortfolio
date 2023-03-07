const nav = document.querySelector('.toolbar');
const headline = document.querySelector('.headline');
const btnMenu = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close');
const btnMenuItem1 = document.querySelector('.btn-menu-item1');
const btnMenuItem2 = document.querySelector('.btn-menu-item2');
const btnMenuItem3 = document.querySelector('.btn-menu-item3');

btnMenu.onclick = function show() {
  nav.classList.add('display');
  headline.classList.add('position');
};

btnClose.onclick = function show() {
  nav.classList.remove('display');
};
btnMenu_item1.onclick = function show() {
  nav.classList.remove('display');
};
btnMenu_item2.onclick = function show() {
  nav.classList.remove('display');
};
btnMenu_item3.onclick = function show() {
  nav.classList.remove('display');
};
