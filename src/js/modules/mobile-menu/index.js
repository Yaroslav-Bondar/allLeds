import {
  BREAK_POINT_MD,
  isBreakPointMd,
  catalogBtn,
  btnMenuBtn,
} from '../common/constants/index.js';

import {
  handleCatalogBtn,
  handleMdBreakpoint,
  handleMenuBtn,
} from './handlers/index.js';

isBreakPointMd.addEventListener('change', handleMdBreakpoint);

if (window.innerWidth <= BREAK_POINT_MD) {
  catalogBtn.onclick = handleCatalogBtn;
}

btnMenuBtn.addEventListener('click', handleMenuBtn);
