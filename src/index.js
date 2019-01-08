import { initHeader } from './header.js';
import { initNavigation } from './navigation.js';
import { initFooter } from './footer.js';
import { aboutPage } from './about.js';

function initRender() {
  initHeader();
  initNavigation();
//  if(// nav element pressed)
    //load that page
    aboutPage();
  initFooter();
}

initRender();
