Object.prototype.forEach = function (func) {
  this.keys().forEach(key => {
    func(this[key], key, this);
  });
}

Object.prototype.map = function (func) {
  return this.keys().map(key => {
    return func(this[key], key, this);
  });
}

Object.prototype.reduce = function (func, accumulator) {
  return this.keys().reduce((acc, cur) => {
    return func(accumulator, this[cur], cur, this);
  }, accumulator);
}

Object.prototype.filter = function (func) {
  let filteredKeys = this.keys().filter((item) => {
    return func(this[item], item, this);
  });

  return filteredKeys.reduce((acc, cur) => {
    acc[cur] = this[cur];
    return acc;
  }, {});
}

Object.prototype.some = function (func) {
  return this.keys().some(key => {
    return func(this[key], key, this);
  });
}

Object.prototype.every = function (func) {
  return this.keys().every(key => {
    return func(this[key], key, this);
  });
}