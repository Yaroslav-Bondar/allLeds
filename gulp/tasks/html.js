// html processing
const html = () =>
  $.gulp
    .src($.path.html.src)
    .pipe($.gp.fileInclude())
    .pipe($.gp.webpHtml()) // to select image type in html (source srcset=)
    .pipe($.gp.htmlValidator.analyzer())
    .pipe($.gp.htmlValidator.reporter())
    .pipe($.gp.size({ title: 'before compression' }))
    // launch of the plugin depending on the condition
    .pipe($.gp.if($.app.isProd, $.gp.htmlmin($.app.htmlmin)))
    .pipe($.gp.size({ title: 'after compression' }))
    .pipe($.gulp.dest($.path.html.dest));

export { html as default };
