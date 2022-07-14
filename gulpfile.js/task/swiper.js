const swiperCss = require('./swiperCss.js');
console.log(swiperCss);
const swiper = $.gulp.series(swiperCss);
module.exports = swiper;