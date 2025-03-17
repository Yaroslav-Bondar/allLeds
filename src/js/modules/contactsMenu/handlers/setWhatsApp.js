import { whatsAppMenu, renderWhatsAppMenu } from '../menu/index.js';
import { mediaMaxWidth576 } from '../../common/constants/index.js';

// load/reload page
if (mediaMaxWidth576.matches) {
  renderWhatsAppMenu();
  whatsAppMenu.import('contacts-header__whatsapp');
}

function setWhatsApp({ matches }) {
  if (matches) {
    if (!whatsAppMenu) {
      renderWhatsAppMenu();
    }
    whatsAppMenu.import('contacts-header__whatsapp');
  } else {
    if (!whatsAppMenu) {
      throw new Error('Menu not created.');
    }
    whatsAppMenu.export();
  }
}

export { setWhatsApp };
