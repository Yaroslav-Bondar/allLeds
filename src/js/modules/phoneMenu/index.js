import setContacts from './handlers/phoneMenu.js';
import { mediaMaxWidth768 } from '../common/constants/index.js';

mediaMaxWidth768.addEventListener('change', setContacts);
