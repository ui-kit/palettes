module.exports = exports['default'] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900
].reduce(function(acc, next) {
  var lightness = Math.round((.97 - next / 1400) * 100) / 100;
  acc[next] = '.l(' + lightness + ')';
  return acc;
}, {});
