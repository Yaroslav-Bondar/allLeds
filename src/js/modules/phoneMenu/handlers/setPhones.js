import { mediaMaxWidth768, mediaMaxWidth576 } from '../../common/constants/index.js';

import { titleMenu, renderTitleMenu, titleMenuBox } from '../menu/index.js';

// load/reload page
if (mediaMaxWidth768.matches && !mediaMaxWidth576.matches) {
  renderTitleMenu();
  titleMenu.import('contacts-header__phone-link');
  titleMenuBox.style.display = 'block';
}

function setPhones({ matches }) {
  if (matches) {
    if (!titleMenu) {
      renderTitleMenu();
    }
    titleMenuBox.style.display = 'block';
    titleMenu.import('contacts-header__phone-link');
  } else {
    if (!titleMenu) {
      throw new Error('Menu not created.');
    }
    titleMenu.export();
    titleMenuBox.style.display = 'none';
  }
}

export { setPhones };
