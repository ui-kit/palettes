var Palette = require('ui-kit-palette');
var material = require('google-material-color/src/colors');
var weighted = require('./subcolors/weighted');

module.exports = exports['default'] = new Palette((() => {
  var compact = x => x.toLowerCase().replace(' ', '');
  var colors = material;
  var colorsbuf = {};
  for (var k in colors) {
    var key = compact(k);
    var color = colors[k];
    var colorbuf = {};
    for (var colork in color) {
      colorbuf[compact(colork)] = color[colork];
    }
    colorsbuf[key] = [color['500'], colorbuf];
  }
  colorsbuf._ = weighted;
  return colorsbuf;
})());
