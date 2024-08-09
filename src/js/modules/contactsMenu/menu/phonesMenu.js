import { Menu } from '../../../services/menu.js';

const phonesCss = {
  container: {
    classes: ['phones-menu'],
  },
  menu: {
    id: 'menu-phones',
    classes: ['phones-menu__menu'],
  },
  button: {
    tag: 'button',
    classes: ['phones-menu__button', 'btn'],
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

class PhonesMenu extends Menu {}

let phonesMenu;

function renderPhonesMenu() {
  phonesMenu = new PhonesMenu(phonesCss);
  phonesMenu.render('.bottom-header__contact-menu');
}

export { phonesMenu, renderPhonesMenu };
