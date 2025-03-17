import { delivery } from './observers/delivery/index.js';
import { ribbonMaxWidth635, ribbonMaxWidth768, ribbonMinWidth768 } from './observers/ribbon/index.js';
import { mediaMaxWidth768, MAX_WIDTH_768 } from '../common/constants/index.js';

const MAX_WIDTH_635 = 635;
const mediaMaxWidth635 = window.matchMedia('(max-width: 635px)');

if (delivery) {
  const deliveryText = document.querySelector('.promo-delivery__text');
  // Set responsive text.
  delivery.observe(deliveryText);
}

const ribbonText = document.querySelector('.promo-ribbon__text');

if (window.innerWidth <= MAX_WIDTH_768) {
  ribbonMaxWidth768?.observe(ribbonText);
} else {
  ribbonMinWidth768?.observe(ribbonText);
}

if (window.innerWidth <= MAX_WIDTH_635) {
  ribbonMaxWidth635?.observe(ribbonText);
}

mediaMaxWidth768.addEventListener('change', ({ matches }) => {
  if (matches) {
    ribbonMaxWidth768?.observe(ribbonText);
    ribbonMinWidth768?.unobserve(ribbonText);
  } else {
    ribbonMinWidth768?.observe(ribbonText);
    ribbonMaxWidth768?.unobserve(ribbonText);
  }
});

mediaMaxWidth635.addEventListener('change', ({ matches }) => {
  if (matches) {
    ribbonMaxWidth635?.observe(ribbonText);
    ribbonMaxWidth768?.unobserve(ribbonText);
  } else {
    ribbonMaxWidth635?.unobserve(ribbonText);
    ribbonMaxWidth768?.observe(ribbonText);
  }
});
