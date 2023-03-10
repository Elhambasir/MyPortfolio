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
const email = document.getElementById('email');
const emailError = document.querySelector('.btnSubmit + small.error');
const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

email.addEventListener('input', (event) => {
  if (!emailRegExp.test(email.value)) {
    emailError.innerHTML = 'Email must be in lowercase';
    document.querySelector('.btnSubmit').type = 'button';
  } else {
    emailError.innerHTML = '';
    document.querySelector('.btnSubmit').type = 'submit';
  }
  event.preventDefault();
});

const btnSubmit = document.querySelector('.btnSubmit');
const username = document.getElementById('name');
const comment = document.getElementById('comment');
username.addEventListener('input', (event) => {
  if (username.value !== undefined && username.value.trim() != "") {
    const userInfo = { 'name': username.value, 'email': email.value, 'comment': comment.value };
    const string = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', string);
  }
  event.preventDefault();
});
comment.addEventListener('input', (event) => {
  if (comment.value !== undefined && comment.value.trim() != "") {
    const userInfo = { 'name': username.value, 'email': email.value, 'comment': comment.value };
    const string = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', string);
  }
  event.preventDefault();
});
email.addEventListener('input', (event) => {
  if (email.value !== undefined && email.value.trim() != "") {
    const userInfo = { 'name': username.value, 'email': email.value, 'comment': comment.value };
    const string = JSON.stringify(userInfo);
    localStorage.setItem('userInfo', string);
  }
  event.preventDefault();
});

btnSubmit.onclick = function storeData() {
  const userInfo = {
    name: username.value,
    email: email.value,
    comment: comment.value,
  };
  const string = JSON.stringify(userInfo);
  localStorage.setItem('userInfo', userInfo);
  localStorage.setItem('userInfo', string);
};

window.onload = function retrieveData() {
  const data = JSON.parse(localStorage.getItem('userInfo'));
  document.querySelector('#name').value = data.name;
  document.querySelector('#comment').value = data.comment;
  document.querySelector('#email').value = data.email;
};
