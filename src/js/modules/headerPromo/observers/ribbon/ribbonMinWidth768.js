import { callback } from '../../services/callback.js';
import { top, bottom } from './constants.js';

let ribbonMinWidth768;

if (window.ResizeObserver) {
  const data = [
    {
      text: top,
      divider: 11,
      min: 12,
      max: 25,
    },
    {
      text: bottom,
      divider: 11,
      min: 12,
      max: 25,
    },
  ];
  ribbonMinWidth768 = new ResizeObserver((entries) => callback(entries, data));
} else {
  console.warn('Resize observer not supported!');
}

export { ribbonMinWidth768 };
