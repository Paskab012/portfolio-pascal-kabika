const menuLinks = document.querySelectorAll('.menuTog');
const mobileMenu = document.querySelector('.menu');
const myPortfolio = document.querySelector('#first-card-section');

function mobileMenuT() {
  mobileMenu.classList.toggle('display-non');
  menuLinks[0].classList.toggle('display-non');
  menuLinks[1].classList.toggle('display-non');
}

menuLinks[0].addEventListener('click', mobileMenuT);
menuLinks[1].addEventListener('click', mobileMenuT);

const navLink = document.querySelectorAll('.navigate');

navLink.forEach((e) => e.addEventListener('click', mobileMenuT));

//****************DETAILS PAGE*****************/

const datas = [
  {
    id: 1,
    title: 'Tonic',
    subTitle: 'CANOPY',
    image: './asset/nature.png',
    imageAlt: 'nature image',
    canopy: ['Back End Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    courses: ['html', 'css', 'javaScript'],
    sourcebtn: '#',
    linkBtn: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    subTitle: 'CANOPY',
    image: './asset/Snapshoot(3).png',
    imageAlt: 'snapshop image',
    canopy: ['Back End Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    courses: ['html', 'css', 'javaScript'],
    sourcebtn: '#',
    linkBtn: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    subTitle: 'CANOPY',
    image: './asset/Snapshoot(2).png',
    imageAlt: 'accrobate lady image',
    canopy: ['Back End Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    courses: ['html', 'css', 'javaScript', 'Ruby on rails'],
    sourcebtn: '#',
    linkBtn: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    subTitle: 'CANOPY',
    image: './asset/Snapshoot(2).png',
    imageAlt: 'accrobate lady image',
    canopy: ['Back End Dev', '2022'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    courses: ['html', 'css', 'javaScript', 'Ruby on rails'],
    sourcebtn: '#',
    linkBtn: '#',
  },
];

for (let i = 0; i < datas.length; i += 1) {
  // let fetch = document.querySelector('#first-card-section').innerHTML;
  console.log(i);

  myPortfolio.innerHTML += `
  <div class='all-components'>
    <div class='first-image'>
      <img src='${datas[i].image}' alt='${datas[i].imageAlt}' />
    </div>
    <div class='tonic-content'>
      <h1>${datas[i].title}</h1>
      <div class='tonic-content-canopy'>
        <p>${datas[i].subTitle}</p>
        <ul class='tonic-list'>
          <li>${datas[i].canopy[0]}</li>
          <li>${datas[i].canopy[1]}</li>
        </ul>
      </div>
      <p>
        ${datas[i].description}
      </p>
      <div class='tonic-courses'>
        <ul>
          <li>
            <a href='#'>${datas[i].courses[0]}</a>
          </li>
          <li>
            <a href='#'>${datas[i].courses[1]}</a>
          </li>
          <li>
            <a href='#'>${datas[i].courses[2]}</a>
          </li>
        </ul>
      </div>
      <div class='btn'>
        <button type='submit' data-popup-ref="myPopup${i}" class="btn-tonic">
          See Project
        </button>
      </div>
    </div>
  </div>
  `;
}
const btnPop = document.querySelectorAll('.btn-tonic');

btnPop.forEach((e) => {
  e.addEventListener('click', () => {
    function popupPgae() {
      const atr = e.getAttribute('class');
      console.log(atr);
    }
  });
});

// popupsBtn.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const popupId = btn.getAttribute('data-popup-ref');
//     const popup = document.querySelector(`[data-popup-id='${popupId}']`);

//     if (popup !== undefined && popup !== null) {
//       const popupContent = popup.querySelector('.popup-content');
//       const closeBtns = popup.querySelectorAll('[data-dismiss-popup]');

//       closeBtns.forEach((btn) => {
//         btn.addEventListener('click', () => {
//           setTimeout(() => {
//             popup.classList.remove('active');
//           }, 250);
//           popupContent.classList.remove('active');
//         });
//       });

//       popupContent.addEventListener('click', (e) => {
//         e.stopPropagation();
//       });

//       popup.classList.add('active');
//       setTimeout(() => {
//         popupContent.classList.add('active');
//       }, 1);
//     }
//   });
// });
