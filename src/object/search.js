Object.prototype.search = function (...searchVals) {
  let arr = [];
  for (let key in this) {
    searchVals.forEach((searchVal) => {
      if (typeof this[key] == 'function') return;
      searchVal = searchVal.toString().toLowerCase();
      if (key.toLowerCase().includes(searchVal) || this[key].toLowerCase().includes(searchVal)) {
        arr.push({ [key]: this[key] });
      }
    })
  }
  return arr;
}

Object.prototype.searchDeep = function (...searchVals) {
  const arr = [];
  const primitives = { ...this.primitives() };

  searchVals.forEach((searchVal) => {
    searchVal = searchVal.toString().toLowerCase();

    for (let key in primitives) {
      if (typeof primitives[key] == 'function') continue;

      if (key.toString().toLowerCase().includes(searchVal) || primitives[key].toString().toLowerCase().includes(searchVal)) {
        arr.push({ [key]: primitives[key] });
      }
    }

  });
  return arr;
}