var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: {
    main: [
      './src/main.jsx'
    ]
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {},
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
      { test: /\.jsx$/, loaders: ['babel-loader'], exclude: /node_modules/}
    ]
  }
};
