import { aboutPage } from './about.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';


function dispPage(id, tag) {

  let content = document.getElementById(tag);
  content.innerHTML = '';
  if(id === 'about')
    aboutPage();
  else if(id === 'menu')
    menuPage();
  else
    contactPage();
};

function initNavigation() {
  let content = document.getElementById('navbar');
  content.innerHTML +=
  `<div id="about" class="navigation">
      <h1>About</h1>
   </div>
   <div id="menu" class="navigation">
      <h1>Menu</h1>
   </div>
   <div id="contact" class="navigation">
      <h1>Contact</h1>
   </div>
  `;

  content.setAttribute('style', 'display: flex;' +
                              'justify-content: center;' +
                              'background-color: #722182;' +
                              'font-size: 15px;');
  let naviElement = document.querySelectorAll('.navigation');
  for(let i = 0; i < naviElement.length; ++i)
  {
    naviElement[i].setAttribute('style', 'width: 10%;' +
                                'cursor: pointer;' +
                                'color: white;');
    naviElement[i].addEventListener('click', e => {
      dispPage(naviElement[i].id, 'page');
    });
  }
}
export { initNavigation };
