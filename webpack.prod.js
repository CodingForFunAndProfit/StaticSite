const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const ImageminPlugin = require('imagemin-webpack-plugin').default;


module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader?-minimize', 'postcss-loader']
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
        use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
            { 
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed'
              }
            }
          ]
        })
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
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        //include: '/images/',
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            //outputPath: 'dist'
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        query: {
          name: 'assets/images/[name]-[sha512:hash:base64:7].[ext]',
        },
      }
      
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }
      
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]', 
        }
      }
      
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
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
          }
        ]
      }

      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
          
        }
      }
        
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
    }*/
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new ImageminPlugin({ test: 'src/images/**' }),
  ]
})