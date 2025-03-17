import { MAX_WIDTH_768, mediaMaxWidth768, catalogBtn, btnMenuBtn } from '../common/constants/index.js';

import { handleCatalogBtn, handleMdBreakpoint, handleMenuBtn } from './handlers/index.js';

mediaMaxWidth768.addEventListener('change', handleMdBreakpoint);

if (window.innerWidth <= MAX_WIDTH_768) {
  catalogBtn.onclick = handleCatalogBtn;
}

btnMenuBtn.addEventListener('click', handleMenuBtn);
