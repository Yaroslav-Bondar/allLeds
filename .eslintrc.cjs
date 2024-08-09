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
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
    ],
    'import/no-unresolved': [
      0,
    ],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'import/no-mutable-exports': 'off',
    'no-restricted-syntax': 'off',
    'no-restricted-exports': [
      'error',
      { restrictDefaultExports: { namedFrom: false } },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }],
  },
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
};
