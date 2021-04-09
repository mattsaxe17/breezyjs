window.loop = function (times, callback) {
  var arr = []
  for (var i = 0; i < times; i++) {
    let ret = callback(i);
    if (ret) arr.push(ret);
  }
  return arr;
}

window.random = function (low, high, decimalPlaces) {
  if (arguments.length == 1) return Math.floor(Math.random() * arguments[0]);
  return parseFloat((Math.random() * (high - low) + low).toFixed(decimalPlaces));
}

//Aliases
window.rand = window.random;