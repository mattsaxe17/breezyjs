Function.prototype.wait = function (milliseconds, ...arguments) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  })
  .then(() => {
    this(...arguments);
  });
}

Function.prototype.repeat = function (times, ...arguments) {
  let arr = [];
  for (let i = 0; i < times; i++) {
    arr.push(this(...arguments));
  }
  return arr;
}

Function.prototype.debounce = function () {

}