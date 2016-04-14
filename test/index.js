var should = require('should');
var palettes = require('..');

describe('palettes', function() {
  it('material', function() {
    console.log(palettes.material.toJSON());
    console.log(palettes.solarized.toJSON());
  });
});
