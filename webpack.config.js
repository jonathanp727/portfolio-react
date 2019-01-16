const webpack = require('webpack');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname);

const APP_DIR = path.resolve(ROOT_DIR, 'src');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

module.exports = {
  entry: ['babel-polyfill', path.join(APP_DIR, 'index.jsx')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', APP_DIR],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  }
};
