import './search'

Object.prototype.extend = function (...objects) {
  objects.forEach((obj) => {
    for (let key in obj) {
      this[key] = obj[key];
    }
  });
  return this;
}

Object.prototype.primitives = function () {
  let arr = [];
  for (let key in this) {
    if (typeof this[key] == 'function') break;
    if (typeof this[key] != 'object') {
      arr.push({ [key]: this[key] });
    } else {
      if (Array.isArray(this[key])) {
        this[key].forEach((item, index) => {
          arr.push({ [key + '[' + index + ']']: item });
        });
      } else {
        this[key].primitives().forEach((item) => {
          arr.push(item);
        })
      }
    }
  }
  return arr;
}

Object.prototype.cloneDeep = function () {

}

Object.prototype.pick = function () {

}