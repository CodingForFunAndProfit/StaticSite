Simple Static Site Boilerplate
using:
- webpack
- nunjucks
- bootstrap sass


npm init
npm install --save-dev 
webpack webpack-cli webpack-merge
webpack-dev-server 
style-loader css-loader sass-loader node-sass 
extract-text-webpack-plugin@4.0.0-beta.0 
html-webpack-plugin 
clean-webpack-plugin 

nunjucks nunjucks-loader|nunjucks-html-loader 
html-loader file-loader url-loader transfer-webpack-plugin jquery font-awesome-loader

image-webpack-loader #load and optimize image assets

npm install --save bootstrap tether popper.js autoprefixer precss exports-loader imports-loader postcss-loader font-awesome

mkdir src && mkdir dist
touch webpack.config
touch src/app.js
package.json: 
	script: 
		"build": "webpack --config ./build/webpack.config.js",
		"develop": "webpack --mode development --watch",
		"develop": "webpack-dev-server --config webpack.dev.js",

npm run build
npm run develop