import { callback } from '../../services/callback.js';
import { top, bottom } from './constants.js';

let delivery;

if (window.ResizeObserver) {
  const data = [
    {
      text: top,
      divider: 17,
      min: 12,
      max: 25,
    },
    {
      text: bottom,
      divider: 21,
      min: 7,
      max: 20,
    },
  ];
  delivery = new ResizeObserver((entries) => callback(entries, data));
} else {
  console.warn('Resize observer not supported!');
}

export { delivery };
