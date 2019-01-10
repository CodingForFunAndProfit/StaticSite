require('./js/main.js');
require('./css/main.css');
import 'bootstrap'; //or require('bootstrap');
import './scss/styles.scss';
//import img from 'file-loader!./images/backgroundexample01.jpg';

if (module.hot) {
  module.hot.accept()
}

const root = document.createElement("div")
root.innerHTML = `<p>Hello Webpack!!</p>`
//document.body.appendChild(root)


//var tpl = require('./templates/page.njk');
//var html = tpl.render({ message: 'Foo that!' });

/*
var $ = require('jquery');
var helloTpl  = require('./templates/layout.njk');
helloTpl.render();
*/
/*

*/
$(function(){
    //$('main.container').append( root );
});