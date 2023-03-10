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

// ------Projects--------
const projectInfo = [
  {
    id: 'p1',
    title: 'Project-1',
    img: './assets/images/Snapshoot Portfolio.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 1995],
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'p2',
    title: 'Project-2',
    img: './assets/images/2.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 2015],
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'p3',
    title: 'Project-3',
    img: './assets/images/1.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 2022],
    tags: ['html', 'css', 'javascript'],
  },
];

const section = document.querySelector('.projects');

projectInfo.forEach((element) => {
  const tags = document.createElement('ul');
  const labels = document.createElement('ul');
  const desc = document.createElement('p');
  desc.classList = "p_desc";
  const image = document.createElement('img');
  const title = document.createElement('h1');
  const imagCover = document.createElement('div');
  const projectDetail = document.createElement('div');
  const card = document.createElement('div');
  const btn = document.createElement('button');
  const btnP = document.createElement('p');

  element.tags.forEach((tagElement) => {
    const tagItem = document.createElement('li');
    const liItem = document.createElement('a');
    liItem.href = '#';
    const tagItemContent = document.createTextNode(tagElement);
    liItem.appendChild(tagItemContent);
    tagItem.appendChild(liItem);
    tags.appendChild(tagItem);
  });

  element.labels.forEach((labelElement) => {
    const labelItem = document.createElement('li');
    const labelItemContent = document.createTextNode(labelElement);
    labelItem.appendChild(labelItemContent);
    labels.appendChild(labelItem);
  });
  image.src = element.img;
  imagCover.appendChild(image);
  const titleText = document.createTextNode(element.title);
  title.appendChild(titleText);
  projectDetail.appendChild(title);
  projectDetail.appendChild(labels);
  desc.innerText = element.description;
  projectDetail.appendChild(desc);
  projectDetail.appendChild(tags);
  btn.innerHTML = '<a href="#detail">See Project</a>';
  btnP.appendChild(btn);
  projectDetail.appendChild(btnP);
  card.appendChild(imagCover);
  card.appendChild(projectDetail);
  section.appendChild(card);
  card.classList = 'card-works';
  imagCover.classList = 'image-cover order-1';
  projectDetail.classList = 'project-info';
  labels.classList = 'label';
  tags.classList = 'tags';

  btn.addEventListener('click', function shows() {

    const popup = document.querySelector('#detail');

    projectInfo.forEach((item) => {
      if (item.title === btn.parentNode.parentElement.firstChild.textContent) {
        const popupCard = `<div class="overlay"></div>
                          <div class="popup_card"> 
                              <div class="project_title">
                                <h1>${item.title}</h1>
                                <img id="closeProject" src="assets/icons/close.png" alt="close">
                              </div>
                            <ul class="label" id="label">
                                 <li>${item.labels[0]}</li>
                                 <li><img src="./assets/icons/Counter.png"/>&nbsp; ${item.labels[1]}</li>
                                 <li><img src="./assets/icons/Counter.png"/>&nbsp; ${item.labels[2]}</li>
                            </ul>
                          <div class="img-cover">
                            <img src="${item.img}"  alt="project-image">
                          </div>
                        <div class="project_detail">
                          <p>${item.description}</p>
                            <div class="tag_button">
                                <ul class="tags">         
                                  <li>${item.tags[0]}</li>
                                  <li>${item.tags[1]}</li>
                                  <li>${item.tags[2]}</li>
                                </ul>
                                <div class="buttons">
                                <button class="btn_see_live">See live <img src="assets/icons/external.png"
                                        alt="external-icon"></button>
                                <button class="btn_see_source">See Source <img src="assets/icons/blu_gitgub.png"
                                        alt="external-icon"></button>
                                </div>
                          </div>
                        </div>
                     </div>`
        popup.innerHTML = popupCard;
        popup.classList.add('show');
        const container = document.querySelector('.container');
        container.classList.add('blur');
        const btnCloseProject = document.querySelector('#closeProject');
        btnCloseProject.addEventListener('click', function shows() {
          popup.classList.remove('show');
          const conttainer = document.querySelector('.container');
          conttainer.classList.remove('blur');
        });
      }
    });
    const btnSeeLive = document.querySelector('.btn_see_live');
    const btnSeeSource = document.querySelector('.btn_see_source');
    btnSeeSource.addEventListener("mouseover", function () {
      const img = document.querySelector('.btn_see_source img');
      img.src = '/assets/icons/g.png';
    });
    btnSeeLive.addEventListener("mouseover", function () {
      const img = document.querySelector('.btn_see_live img');
      img.src = '/assets/icons/external-link-16.png';
    });
    btnSeeSource.addEventListener("mouseout", function () {
      const img = document.querySelector('.btn_see_source img');
      img.src = 'assets/icons/blu_gitgub.png';
    });
    btnSeeLive.addEventListener("mouseout", function () {
      const img = document.querySelector('.btn_see_live img');
      img.src = 'assets/icons/external.png';
    });
  });
});

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
