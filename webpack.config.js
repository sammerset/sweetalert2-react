// const webpack = require('webpack');
// const path = require('path');

// const pathArr = __dirname.split(path.sep);
// const projectName = pathArr[pathArr.length - 1];
// const buildPath = `${__dirname}${path.sep}${projectName}${path.sep}build`;

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
};
