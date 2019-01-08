import { initHeader } from './header.js';
import { initNavigation } from './navigation.js';
import { initFooter } from './footer.js';
import { aboutPage } from './about.js';
//import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

function initRender() {
  initHeader();
  initNavigation();
//  if(// nav element pressed)
    //load that page
    contactPage();
  initFooter();
}

initRender();
