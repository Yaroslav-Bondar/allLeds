import { callback } from '../../services/callback.js';
import { top, bottom } from './constants.js';

let ribbonMaxWidth768;

if (window.ResizeObserver) {
  const data = [
    {
      text: top,
      divider: 9,
      min: 12,
      max: 20,
    },
    {
      text: bottom,
      divider: 7.2,
      min: 12,
      max: 25,
    },
  ];
  ribbonMaxWidth768 = new ResizeObserver((entries) => callback(entries, data));
} else {
  console.warn('Resize observer not supported!');
}

export { ribbonMaxWidth768 };
