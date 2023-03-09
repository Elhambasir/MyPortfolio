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
    title: 'Preect-1',
    img: './assets/images/Snapshoot Portfolio.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 1995],
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'p2',
    title: 'Preect-2',
    img: './assets/images/2.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 2015],
    tags: ['html', 'css', 'javascript'],
  },
  {
    id: 'p3',
    title: 'Preect-3',
    img: './assets/images/1.png',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas'
      + ' asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.',
    labels: ['CANOPY', 'Back End Dev', 2015],
    tags: ['html', 'css', 'javascript'],
  },
];

const section = document.querySelector('.projects');

projectInfo.forEach((element) => {
  const tags = document.createElement('ul');
  const labels = document.createElement('ul');
  const desc = document.createElement('p');
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

//   btn.addEventListener('click', function shows() {
//     const popupCard = document.querySelector('#detail');
    
//     projectInfo.forEach((item) => {
//       if (item.title === btn.parentNode.parentElement.firstChild.textContent) {
//         // const h1 = document.createElement('h1').innerHTML = item.title;
//         // item.tags.forEach((tagElement) => {
//         //   const tagItem = document.createElement('li');
//         //   const liItem = document.createElement('a');
//         //   liItem.href = '#';
//         //   const tagItemContent = document.createTextNode(tagElement);
//         //   liItem.appendChild(tagItemContent);
//         //   tagItem.appendChild(liItem);
//         //   tags.appendChild(tagItem);
//         // });
//         // item.labels.forEach((labelElement) => {
//         //   const labelItem = document.createElement('li');
//         //   const labelItemContent = document.createTextNode(labelElement);
//         //   labelItem.appendChild(labelItemContent);
//         //   labels.appendChild(labelItem);
//         // });

//         // popupCard.children[1].children[0].children[0].innerHTML = item.title;
//         // console.log(document.querySelector('.project_title').firstChild.innerText);
//         document.querySelector('.project_title h1').innerHTML = item.title;
//         item.labels.forEach((labelElement) => {
//           const labelItemContent = document.createTextNode(labelElement);
//           const labelItem = document.createElement('li');
//           const img = document.createElement('img');
//           img.src = './assets/icons/Counter.png';
//           labelItem.appendChild(img);
//           labelItem.appendChild(labelItemContent);
//           // console.log(labelItem.firstChild);
//           document.querySelector('.popup_card .label').appendChild(labelItem);
//           document.querySelector('.popup_card .label').firstChild.appendChild(item.title);
          
//           });

//         // popupCard.children[1].children[1].children[0].innerHTML = item.labels[0];
//         // popupCard.children[1].children[1].children[1].children[1].innerHTML = item.labels[1];
//         // popupCard.children[1].children[1].children[2].children[1].innerHTML = item.labels[2];

//       //   popupCard.children[1].children[2].children[0].src = item.img;

//       //   popupCard.children[1].children[3].children[0].innerHTML = item.description;
//       //   popupCard.children[1].children[3].children[1].children[0].children[0].innerHTML = item.tags[0];
//       //   popupCard.children[1].children[3].children[1].children[0].children[1].innerHTML = item.tags[1];
//       //   popupCard.children[1].children[3].children[1].children[0].children[2].innerHTML = item.tags[2];
//        }
//     });
//     popupCard.classList.add('show');
//     const conttainer = document.querySelector('.container');
//     conttainer.classList.add('blur');
//   });
// });
// const btnCloseProject = document.querySelector('#closeProject');
// btnCloseProject.addEventListener('click', function shows() {
//   const popupCard = document.querySelector('#detail');
//   popupCard.classList.remove('show');
//   const conttainer = document.querySelector('.container');
//   conttainer.classList.remove('blur');
});