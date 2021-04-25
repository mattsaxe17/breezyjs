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
  let copy = JSON.parse(JSON.stringify(this));
  const ret = {};

  let traverse = (obj, initialPath = '') => {
    let currentPath;

    for (let key in obj) {
      if (initialPath != '') {
        if (Array.isArray(obj)) {
          currentPath = initialPath + '[' + key + ']';
        } else {
          currentPath = initialPath + '.' + key;
        }
      } else {
        currentPath = key;
      }

      if (typeof obj[key] == 'object') {
        traverse(obj[key], currentPath);
      } else {
        if (typeof obj[key] != 'function') {
          ret[currentPath] = obj[key];
        }
      }
    }
  }
  traverse(copy);

  return ret;
}

Object.prototype.pick = function () {

}