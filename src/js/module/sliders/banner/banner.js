const {Swiper, Pagination} = require('swiper');
// , {Pagination} 
// const Pagination = require('swiper');
// console.log(require('swiper/css'));
// const css = require('swiper/css');
// console.log(css);
const swiper = new Swiper('.banner__slider', {
    modules: [Pagination],
    // If we need pagination
    pagination: {
        el: '.banner__pagination',
        type: 'bullets',
        bulletClass: 'banner__bullet',
        bulletActiveClass: 'banner__bullet_active',
    },
});

// console.log(Swiper, Pagination);