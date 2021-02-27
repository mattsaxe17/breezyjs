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