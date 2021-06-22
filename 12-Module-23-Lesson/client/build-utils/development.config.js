const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  devServer: {
    contentBase: path.join(__dirname, 'src/task2'),
    // historyApiFallback: true,
    // compress: true,
    // localhost:4040/api/notes -> localhost:3002/notes
    port: 4040,
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        pathRewrite: { '^/api': '' },
      },
    },
    // noInfo: true,
    // quiet: true,
    // clientLogLevel: 'warning',
    // stats: 'errors-only',
    // open: true
  },
});
