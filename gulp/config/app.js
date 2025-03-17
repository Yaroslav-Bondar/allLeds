import news from '../data/news.json' assert { type: 'json' };

// read arguments from command line
// to set plugin configurations depending
// on the mode build run
// build run
const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd,

  isDev,

  htmlmin: {
    // delete whitespaces from html
    collapseWhitespace: isProd,
  },

  cleanCss: {
    level: {
      1: {
        tidySelectors: false,
      },
    },
  },

  pug: {
    // compression pug files
    pretty: isDev,
    data: {
      news,
    },
  },

  webpack: {
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
    },
  },

  imgemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
};
