// if not included in html 
const {Swiper, Pagination} = require('swiper');

const swiper = new Swiper('.banner__slider', {
    modules: [Pagination],
    // If we need pagination
    pagination: {
        el: '.banner__pagination',
        type: 'bullets',
        bulletClass: 'banner__bullet',
        bulletActiveClass: 'banner__bullet_active',
        clickable: true,
    },
});
