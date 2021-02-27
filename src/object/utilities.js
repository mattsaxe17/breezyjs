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

Object.prototype.search = function (...searchVals) {
  let arr = [];
  for (let key in this) {
    searchVals.forEach((searchVal) => {
      if (typeof this[key] == 'function') return;
      if (key.includes(searchVal.toString()) || this[key].toString().includes(searchVal.toString())) {
        arr.push({ [key]: this[key] });
      }
    })
  }
  return arr;
}

Object.prototype.searchDeep = function (...searchVals) {
  var arr = [];
  var primitives = {}.extend(this.primitives());
  for (let primitive in primitives) {
    if (typeof primitives[primitive] == 'function') return arr;
    arr = arr.concat(primitives[primitive].search(...searchVals));
  }
  return arr;
}