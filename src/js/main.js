import './modules/mobile-menu/index.js';
import './modules/headerSearch/index.js';
import './modules/headerPromo/index.js';
import './modules/catalog/index.js';
import './modules/phoneMenu/index.js';
import './modules/sliders/index.js';
import { default as DynamicAdapt } from './services/dynamicAdapt/index.js';

new DynamicAdapt('max').init();
