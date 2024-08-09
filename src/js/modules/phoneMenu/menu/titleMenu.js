import { TitleMenu } from './menu.js';
import { createElement } from '../../../services/index.js';

let titleMenu;
let titleMenuBox;
const menuCss = {
  container: {
    tag: 'div',
    classes: ['title-menu__container'],
  },
  menu: {
    tag: 'menu',
    id: 'menu-title',
    classes: ['title-menu__menu'],
  },
  button: {
    tag: 'button',
    id: 'menu-title-button',
    classes: ['title-menu__button', 'btn', 'btn_theme_transparent'],
  },
  // If the anchor positioning API
  // (https://developer.chrome.com/blog/anchor-positioning-api#feature_detection_and_polyfilling)
  // is supported, this property isn't required.
  // Anchoring is implemented by CSS.
  anchor: {
    id: 'menu-title-button',
  },
  item: `
    all: initial;
    font: normal 400 18px montserrat-medium, sans-serif;
    color: black;
    cursor: pointer;
  `,
};

function renderTitleMenu() {
  titleMenuBox = createElement({ classes: ['title-menu'] });
  const destination = document.querySelector('.contacts-header__phone');
  destination.append(titleMenuBox);
  titleMenu = new TitleMenu(menuCss);
  titleMenu.render('.title-menu');
}

export { renderTitleMenu, titleMenu, titleMenuBox };
