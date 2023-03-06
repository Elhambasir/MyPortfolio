const btn_menu = document.querySelector('.collapse-button');
const nav = document.querySelector('.toolbar');

btn_menu.onclick = function show() {
  nav.classList.toggle('.display');
};