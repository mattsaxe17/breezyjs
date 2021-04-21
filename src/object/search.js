Object.prototype.search = function (...searchVals) {
  let arr = [];
  for (let key in this) {
    searchVals.forEach((searchVal) => {
      if (typeof this[key] == 'function') return;
      if (key.toLowerCase().includes(searchVal.toString().toLowerCase()) || this[key].toString().toLowerCase().includes(searchVal.toString().toLowerCase())) {
        arr.push({ [key]: this[key] });
      }
    })
  }
  return arr;
}

Object.prototype.searchDeep = function (...searchVals) {
  let arr = [];
  let primitives = {}.extend(this.primitives());
  for (let primitive in primitives) {
    if (typeof primitives[primitive] == 'function') return arr;
    arr = [...arr, ...primitives[primitive].search(...searchVals)];
  }
  return arr;
}