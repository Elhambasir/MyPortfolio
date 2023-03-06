const nav = document.querySelector('.toolbar');
const headline = document.querySelector('.headline');
const btn_menu = document.querySelector('.btn-menu')
const btn_close = document.querySelector('.btn-close');
const btn_menu_item1 = document.querySelector('.btn-menu-item1');
const btn_menu_item2 = document.querySelector('.btn-menu-item2');
const btn_menu_item3 = document.querySelector('.btn-menu-item3');

btn_menu.onclick = function show() {
  nav.classList.add('display');
  headline.classList.add('position');
};

btn_close.onclick = function show() {
  nav.classList.remove('display');
};
btn_menu_item1.onclick = function show() {
  nav.classList.remove('display');
};
btn_menu_item2.onclick = function show() {
  nav.classList.remove('display');
};
btn_menu_item3.onclick = function show() {
  nav.classList.remove('display');
};
