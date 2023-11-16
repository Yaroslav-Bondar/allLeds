import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sassPrepros = gulpSass(dartSass);

// sass processing
const sass = () => $.gulp.src($.path.sass.src, { sourcemaps: $.app.isDev })
  .pipe($.gp.sassGlob()) // import $.path masks
  // .on('error', sass.logError)
  .pipe(sassPrepros())
  .pipe($.gp.webpCss())
  .pipe($.gp.autoprefixer())
  .pipe($.gp.shorthand()) // shortening css properties
  .pipe($.gp.groupCssMediaQueries())
  .pipe($.gp.size({ title: 'main.scss before compression' }))
  .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev }))
  .pipe($.gp.rename({ suffix: '.min' }))
  .pipe($.gp.cleanCss()) // min css
  .pipe($.gp.size({ title: 'main.scss after compression' }))
  .pipe($.gulp.dest($.path.sass.dest, { sourcemaps: $.app.isDev }));

export { sass as default };
