window.loop = function (times, callback) {
  var arr = [];
  for (var i = 0; i < times; i++) {
    let ret = callback(i);
    if (ret != undefined) arr.push(ret);
  }
  return arr;
}

window.random = function (low = 0, high = 1, decimalPlaces = 10) {
  if (arguments.length === 1) return Math.floor(Math.random() * arguments[0]);

  return parseFloat((Math.random() * (high - low) + low).toFixed(decimalPlaces));
}

window.currentTime = function () {
  return new Date();
}

window.timeSince = function (date) {
  return currentTime().difference(date);
}