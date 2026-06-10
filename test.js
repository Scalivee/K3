const { JSDOM } = require('jsdom');
const dom = new JSDOM('<div class="denah-map"></div><div class="bahaya-grid"></div>');
global.document = dom.window.document;
global.window = dom.window;
require('./map.js');
dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
console.log(dom.window.document.querySelector('.bahaya-grid').innerHTML.length);
