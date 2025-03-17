import { titleMenu, renderTitleMenu, titleMenuBox } from '../menu/index.js';

function setContacts({ matches }) {
  if (matches) {
    if (!titleMenu) {
      throw new Error('Menu not created.');
    }
    titleMenuBox.style.display = 'none';
  } else {
    if (!titleMenu) {
      renderTitleMenu();
    }
    titleMenu.import('contacts-header__phone-link');
    titleMenuBox.style.display = 'block';
  }
}

export { setContacts };
