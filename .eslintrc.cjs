module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: 'airbnb-base',
  globals: {
    $: 'readonly',
  },
  ignorePatterns: ['/public'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        '@babel/plugin-syntax-import-assertions',
      ],
    },
  },
  rules: {
    'import/no-named-default': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
    ],
    'import/no-unresolved': [
      0,
    ],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'no-restricted-exports': [
      'error',
      { restrictDefaultExports: { namedFrom: false } },
    ],
  },
};
