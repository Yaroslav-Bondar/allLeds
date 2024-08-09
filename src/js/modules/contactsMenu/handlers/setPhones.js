import { phonesMenu, renderPhonesMenu } from '../menu/index.js';
import { mediaMaxWidth576 } from '../../common/constants/index.js';

// load/reload page
if (mediaMaxWidth576.matches) {
  renderPhonesMenu();
  phonesMenu.import('contacts-header__phone-link');
}

function setPhones({ matches }) {
  if (matches) {
    if (!phonesMenu) {
      renderPhonesMenu();
    }
    phonesMenu.import('contacts-header__phone-link');
  }
}

export { setPhones };
