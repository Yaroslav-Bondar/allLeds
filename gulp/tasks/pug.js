// pug processing
const pug = () =>
  $.gulp
    .src($.path.pug.src)
    .pipe($.gp.pug($.app.pug))
    .pipe($.gp.webpHtml()) // to select image type in html(source srcset=)
    .pipe($.gulp.dest($.path.pug.dest));

export { pug as default };
