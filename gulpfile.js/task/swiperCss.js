// connecting styles for swiper slider with the subsequent 
// connection of files in html
function swiperCss() {
    return $.gulp.src($.path.swiperCss.src)
            .pipe($.gulp.dest($.path.swiperCss.dest, {sourcemaps: $.app.isDev}))
}

module.exports = swiperCss;