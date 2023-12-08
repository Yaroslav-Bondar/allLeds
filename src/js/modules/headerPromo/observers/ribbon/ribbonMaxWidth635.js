import { callback } from '../../services/callback.js';
import { bottom, top } from './constants.js';

let ribbonMaxWidth635;

if (window.ResizeObserver) {
  const data = [
    {
      text: top,
      divider: 16,
      min: 7,
      max: 18,
    },
    {
      text: bottom,
      divider: 14,
      min: 12,
      max: 18,
    },
  ];
  ribbonMaxWidth635 = new ResizeObserver((entries) => callback(entries, data));
} else {
  console.warn('Resize observer not supported!');
}

export { ribbonMaxWidth635 };
