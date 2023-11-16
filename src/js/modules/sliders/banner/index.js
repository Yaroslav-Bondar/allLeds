import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.banner__slider', {
  modules: [Pagination],
  autoHeight: true,
  pagination: {
    el: '.banner__pagination',
    type: 'bullets',
    bulletClass: 'banner__bullet',
    bulletActiveClass: 'banner__bullet_active',
    clickable: true,
  },
});

export { swiper as default };
