// server update
//  const server = () => $.browserSync.init({
const server = () => $.browserSync.init({
  server: {
    baseDir: $.path.root,
  },
});

export { server as default };
