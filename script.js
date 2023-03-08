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
let projectInfo = [
  {
    id: "p1",
    title: "Preect-1",
    img: "./assets/images/Snapshoot Portfolio.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas"
      + " asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.",
    labels: ["CANOPY", "Back End Dev", 1995],
    tags: ["html", "css", "javascript"]
  },
  {
    id: "p2",
    title: "Preect-2",
    img: "./assets/images/2.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas"
      + " asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.",
    labels: ["CANOPY", "Back End Dev", 2015],
    tags: ["html", "css", "javascript"]
  },
  {
    id: "p3",
    title: "Preect-3",
    img: "./assets/images/1.png",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint veniam perspiciatis voluptas"
      + " asperiores assumenda, ducimus, sapiente sequi iure debitis rem consequuntur necessitatibus adipisci.",
    labels: ["CANOPY", "Back End Dev", 2015],
    tags: ["html", "css", "javascript"]
  }
];


const section = document.querySelector('.projects');


projectInfo.forEach((element, index) => {
  let tags = document.createElement('ul');
  let labels = document.createElement('ul');
  let desc = document.createElement('p');
  let image = document.createElement('img');
  let title = document.createElement('h1');
  let imagCover = document.createElement('div');
  let projectDetail = document.createElement('div');
  let card = document.createElement('div');
  let btn = document.createElement('button');
  let btnP = document.createElement('p');

  element.tags.forEach((tagElement, index) => {
    let tagItem = document.createElement('li');
    let liItem = document.createElement('a');
    liItem.href = "#";
    let tagItemContent = document.createTextNode(tagElement);
    liItem.appendChild(tagItemContent);
    tagItem.appendChild(liItem);
    tags.appendChild(tagItem);
  })

  element.labels.forEach((labelElement, index) => {
    let labelItem = document.createElement('li');
    let labelItemContent = document.createTextNode(labelElement);
    labelItem.appendChild(labelItemContent);
    labels.appendChild(labelItem);
  })
  image.src = element.img;
  imagCover.appendChild(image);
  let titleText = document.createTextNode(element.title);
  title.appendChild(titleText);
  projectDetail.appendChild(title);
  projectDetail.appendChild(labels);
  desc.innerText = element.description;
  projectDetail.appendChild(desc);
  projectDetail.appendChild(tags);
  btn.innerHTML = "<a href='#detail'>See Project</a>";
  btnP.appendChild(btn);
  projectDetail.appendChild(btnP);
  card.appendChild(imagCover);
  card.appendChild(projectDetail)
  section.appendChild(card);
  card.classList = "card-works";
  imagCover.classList = "image-cover order-1";
  projectDetail.classList = "project-info";
  labels.classList = "label";
  tags.classList = "tags"
  //...........................   
  btn.addEventListener('click', function () {
    let popup_card = document.querySelector('#detail');
    projectInfo.forEach((item, index) => {
      if (item.title === btn.parentNode.parentElement.firstChild.textContent) {
        popup_card.children[1].children[0].children[0].innerHTML = item.title;

        popup_card.children[1].children[1].children[0].innerHTML = item.labels[0];
        popup_card.children[1].children[1].children[1].children[1].innerHTML = item.labels[1];
        popup_card.children[1].children[1].children[2].children[1].innerHTML = item.labels[2];

        popup_card.children[1].children[2].children[0].src = item.img;

        popup_card.children[1].children[3].children[0].innerHTML = item.description;
        popup_card.children[1].children[3].children[1].children[0].children[0].innerHTML = item.tags[0];
        popup_card.children[1].children[3].children[1].children[0].children[1].innerHTML = item.tags[1];
        popup_card.children[1].children[3].children[1].children[0].children[2].innerHTML = item.tags[2];
      }
    })
    popup_card.classList.add('show');
    let conttainer = document.querySelector('.container');
    conttainer.classList.add('blur');
  })
})
let btnCloseProject = document.querySelector('#closeProject');
btnCloseProject.addEventListener('click', function () {
  let popup_card = document.querySelector('#detail');
  popup_card.classList.remove('show');
  let conttainer = document.querySelector('.container');
  conttainer.classList.remove('blur');
})


