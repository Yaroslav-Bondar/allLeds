import del from 'del';

// delete dir
const clear = () => del($.path.root);

export { clear as default };
