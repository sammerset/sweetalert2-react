// const webpack = require('webpack');
// const path = require('path');

// const pathArr = __dirname.split(path.sep);
// const projectName = pathArr[pathArr.length - 1];
// const buildPath = `${__dirname}${path.sep}${projectName}${path.sep}build`;
//


const configFactory = mode => {
  const config = {
    entry: `${__dirname}/docs-site/src/index.js`,
    output: {
      path: `${__dirname}/docs-site/build`,
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }
  }

  // if (mode === "development") {

  // }
  return config
}

module.exports = configFactory
