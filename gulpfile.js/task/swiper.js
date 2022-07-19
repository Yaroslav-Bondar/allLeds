// the task of connecting swiper slider 
// styles and js files with the subsequent 
// connection of files in html
const swiperCss = require('./swiperCss.js');
const swiperJs = require('./swiperJs.js');
const swiper = $.gulp.series(swiperCss);
module.exports = swiper;