var webpack = require('webpack');

module.exports = {
  entry: {
    entry: './src/entry/index.jsx',
    client: './src/client/index.jsx'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  }
};
