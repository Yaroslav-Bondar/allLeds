import webpack from 'webpack-stream'; // bundling js modules

// js processing
const js = () => $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
  .pipe($.gp.babel()) // use the latest features of java script
  .pipe(webpack($.app.webpack)) // bundling js modules
  .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }));

export { js as default };
