import { Menu } from '../../../services/menu.js';

class WhatsAppMenu extends Menu {}

const whatsAppCss = {
  container: {
    classes: ['whatsappmenu'],
  },
  menu: {
    id: 'menu-whatsapp',
    classes: ['whatsappmenu__menu', 'menu-contacts'],
  },
  button: {
    tag: 'button',
    classes: ['whatsappmenu__button', 'btn'],
  },
  anchor: {
    id: 'bottom-header-contact-menu',
  },
  item: `
    all: initial;
    font: normal 400 18px montserrat-medium, sans-serif;
    color: black;
    cursor: pointer;
  `,
};

let whatsAppMenu;

function renderWhatsAppMenu() {
  whatsAppMenu = new WhatsAppMenu(whatsAppCss);
  whatsAppMenu.render('.bottom-header__contact-menu');
}

export { whatsAppMenu, renderWhatsAppMenu };
