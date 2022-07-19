// swiper js connection with the subsequent 
// connection of files in html
function swiperJs() {
    return $.gulp.src($.path.swiperJs.src)
            .pipe($.gulp.dest($.path.swiperJs.dest, {sourcemaps: $.app.isDev}))
}

module.exports = swiperJs;