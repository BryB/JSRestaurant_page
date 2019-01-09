import { initHeader } from './header.js';
import { initNavigation } from './navigation.js';
import { initFooter } from './footer.js';
import { aboutPage } from './about.js';

function cssReset() {
  let body = document.getElementById('body');
  body.setAttribute('style', 'margin: 0;' +
                              'padding: 0;' +
                              'font-size: 100%;' +
                              'line-height: 1;');
}

function initRender() {
  let header = '<header id="header"></header>';
  let footer = '<div id="footer"></div>';
  let navigation = '<section id="navbar"></section>';
  let page = '<section id="page"></section>';
  let content = document.getElementById('content');

  content.innerHTML += header + navigation + page + footer;
  cssReset();
  initHeader();
  initNavigation();
  aboutPage();
  initFooter();
}

initRender();
