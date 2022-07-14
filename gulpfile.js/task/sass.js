// plugins
const sassPrepros = require('gulp-sass')(require('sass'));

// sass processing
// {
//     includePaths: ['./node_modules'],
//   }

// connecting styles for swiper slider
// function setSwiper() {
//     return $.gulp.src('node_modules/swiper/swiper-bundle.min.css')
//             .pipe($.gulp.dest($.path.sass.dest))
// }
const sass = () => {
    // setSwiper();
    return $.gulp.src($.path.sass.src, {sourcemaps: $.app.isDev})
        .pipe($.gp.sassGlob()) // import $.path masks
        // .on('error', sass.logError)
        .pipe(sassPrepros())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand()) // shortening css properties
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({title: 'main.scss before compression'}))
        .pipe($.gulp.dest($.path.sass.dest, {sourcemaps: $.app.isDev}))
        .pipe($.gp.rename({suffix: ".min"}))
        .pipe($.gp.csso())  // min css
        .pipe($.gp.size({title: 'main.scss after compression'}))
        .pipe($.gulp.dest($.path.sass.dest, {sourcemaps: $.app.isDev}))
}

module.exports = sass;