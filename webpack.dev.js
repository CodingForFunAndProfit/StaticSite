const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    contentBase: './src/',
    watchContentBase: true,
  },

  module: {
    rules: [
    {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
    },
    {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
    },
    {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})