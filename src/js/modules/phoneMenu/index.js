import setContacts from './handlers/phoneMenu.js';
import { isBreakPointMd } from '../common/constants/index.js';

isBreakPointMd.addEventListener('change', setContacts);
