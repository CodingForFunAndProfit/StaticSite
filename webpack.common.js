const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
//const ImageminPlugin = require('imagemin-webpack-plugin');
//const ImageminPlugin = require('imagemin-webpack-plugin').default;
//import ImageminPlugin from 'imagemin-webpack-plugin';

module.exports = {
  entry: [
    
    './src/app.js',
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.(html|njk|nunjucks)$/,
      use: ['html-loader',{
        loader: 'nunjucks-html-loader',
        options : {
          searchPaths: ['./src/templates']
        }
      }]
    }]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'WebWorker - Developing, Consulting & Networking',
      inject: 'body',
      template: 'nunjucks-html-loader!./src/templates/index.njk',
      minify: true,
      /*
        templateParameters: '',
        favicon: '',
        meta: '',
      */
    }),
    new HtmlWebpackPlugin({
      minify: true,
      filename: 'connect.html',
      inject: 'body',
      template: 'nunjucks-html-loader!./src/templates/connect.njk',
    }),
    new HtmlWebpackPlugin({
      minify: true,
      filename: 'elements.html',
      inject: 'body',
      template: 'nunjucks-html-loader!./src/templates/elements.njk',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
    }),
    //new ImageminPlugin({test: /\.(png|jpg|gif)$/})
    /*
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
   }),
   */
    /*new HtmlWebpackPlugin({
      title: 'My killer app'
    })*/
  ]
}