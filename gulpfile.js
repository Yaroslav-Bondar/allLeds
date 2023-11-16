import gulp from 'gulp';
import browserSync from 'browser-sync';
import * as gp from './gulp/gulp-plugins/index.js';
import * as tasks from './gulp/tasks/index.js';
import { default as path } from './gulp/config/path.js';
import { default as app } from './gulp/config/app.js';

// node global object (like window in JavaScript)
// now these variables are available from everywhere
global.$ = {
  gulp,
  gp,
  browserSync: browserSync.create(),
  path,
  app,
};

// observation task.html
const watcherHtml = () => {
  $.gulp.watch($.path.html.watch, tasks.html).on('all', $.browserSync.reload);
  $.gulp.watch($.path.css.watch, tasks.css).on('all', $.browserSync.reload);
  $.gulp.watch($.path.sass.watch, tasks.sass).on('all', $.browserSync.reload);
  $.gulp.watch($.path.js.watch, tasks.js).on('all', $.browserSync.reload);
  $.gulp.watch($.path.img.watch, tasks.img).on('all', $.browserSync.reload);
  $.gulp.watch($.path.font.watch, tasks.font).on('all', $.browserSync.reload);
};

// observation task.pug
const watcherPug = () => {
  $.gulp.watch($.path.pug.watch, tasks.pug).on('all', $.browserSync.reload);
  $.gulp.watch($.path.css.watch, tasks.css).on('all', $.browserSync.reload);
  $.gulp.watch($.path.sass.watch, tasks.sass).on('all', $.browserSync.reload);
  $.gulp.watch($.path.js.watch, tasks.js).on('all', $.browserSync.reload);
  $.gulp.watch($.path.img.watch, tasks.img).on('all', $.browserSync.reload);
  $.gulp.watch($.path.font.watch, tasks.font).on('all', $.browserSync.reload);
};

// production
const build = $.gulp.series(
  tasks.clear,
  $.gulp.parallel(tasks.html, tasks.sass, tasks.js, tasks.img, tasks.font),
);

// develop
const devHtml = $.gulp.series(build, $.gulp.parallel(tasks.server, watcherHtml));

// assembly
const devPug = $.gulp.series(
  tasks.clear,
  $.gulp.parallel(tasks.pug, tasks.css, tasks.js, tasks.img, tasks.font),
  $.gulp.parallel(tasks.server, watcherPug),
);

// export individual tasks
const { js, sass, html } = tasks;
export { js, sass, html };
export { devPug };

// run in production mode or development :
// development mode:
// gulp
// or
// npm run start (see scripts in packge.json)

// production mode:
// gulp --production
// or
// npm run build (see scripts in packge.json)

export default $.app.isProd ? build : devHtml;
