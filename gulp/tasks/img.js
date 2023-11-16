// img processing
const img = () => $.gulp.src($.path.img.src)
  .pipe($.gp.newer($.path.img.dest)) // processing only new or changed files
  .pipe($.gp.webp()) // convert img files to webp format
  .pipe($.gulp.dest($.path.img.dest))
  .pipe($.gulp.src($.path.img.src))
  .pipe($.gp.newer($.path.img.dest))
  // launch of the plugin depending on the condition
  .pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin)))
  .pipe($.gulp.dest($.path.img.dest));

export { img as default };
