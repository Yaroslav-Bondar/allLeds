import {
  setPhones,
  setContacts,
} from './handlers/index.js';
import { setMediaText } from '../../services/index.js';
import { mediaMaxWidth768, mediaMaxWidth576 } from '../common/constants/index.js';

const contactsHeaderWhatsapp = document.querySelector('.contacts-header__whatsapp');
const WHATSAPP_DESKTOP_TEXT = contactsHeaderWhatsapp.textContent;
const WHATSAPP_MOBILE_TEXT = 'WhatsApp';

// load/reload page
if (mediaMaxWidth768.matches && !mediaMaxWidth576.matches) {
  contactsHeaderWhatsapp.textContent = WHATSAPP_MOBILE_TEXT;
}

mediaMaxWidth768.addEventListener('change', setPhones);
mediaMaxWidth768.addEventListener('change', ({ matches }) => setMediaText({
  matches,
  matchtext: WHATSAPP_MOBILE_TEXT,
  unmatchtext: WHATSAPP_DESKTOP_TEXT,
  target: contactsHeaderWhatsapp,
}));
mediaMaxWidth576.addEventListener('change', ({ matches }) => setMediaText({
  matches,
  matchtext: WHATSAPP_DESKTOP_TEXT,
  unmatchtext: WHATSAPP_MOBILE_TEXT,
  target: contactsHeaderWhatsapp,
}));
mediaMaxWidth576.addEventListener('change', setContacts);
