const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
	hot: true
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
    /*
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75
            }
          }
        },
      ],
    }
    */
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})