const nav = document.querySelector('.toolbar');
const headline = document.querySelector('.headline');
const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const btnMenuItem1 = document.querySelector('.btn-menu-item1');
const btnMenuItem2 = document.querySelector('.btn-menu-item2');
const btnMenuItem3 = document.querySelector('.btn-menu-item3');

function resize() {
  if (window.innerWidth >= 768) {
    nav.classList.remove('display');
  }
}

btnMenu.onclick = function show() {
  nav.classList.add('display');
  headline.classList.add('position');
  resize();
};

btnClose.onclick = function show() {
  nav.classList.remove('display');
};
btnMenuItem1.onclick = function show() {
  nav.classList.remove('display');
};
btnMenuItem2.onclick = function show() {
  nav.classList.remove('display');
};
btnMenuItem3.onclick = function show() {
  nav.classList.remove('display');
};

const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('.btnSubmit + small.error');
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

email.addEventListener('input', (event) => {

  if (!emailRegExp.test(email.value)) {
    emailError.innerHTML = 'Email must be in lowercase';
    document.querySelector('.btnSubmit').type = 'button';
  }
  if (email.value == email.value.toLowerCase()) {
    emailError.innerHTML = '';
    document.querySelector('.btnSubmit').type = 'submit';
  }
});
