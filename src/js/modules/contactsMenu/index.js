import { setWhatsApp, setPhones } from './handlers/index.js';
import { mediaMaxWidth576 } from '../common/constants/index.js';

mediaMaxWidth576.addEventListener('change', setWhatsApp);
mediaMaxWidth576.addEventListener('change', setPhones);
