import './search'
import './iteration'

// Extends an object to contain all key-value pairs from provided object(s), and overwrites duplicate key names
Object.prototype.extend = function (...objects) {
  objects.forEach((obj) => {
    for (let key in obj) {
      this[key] = obj[key];
    }
  });
  return this;
}

// Returns an object with all primitive values in an object with thier path as a key
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

// TODO: Implement
Object.prototype.pick = function (keys) {

}

// TODO: Implement
Object.prototype.pickBy = function (func) {

}

// Copies enumerable properties to target form source objects
Object.prototype.assign = function (...sources) {
  Object.assign(this, ...sources);
}

// Returns an array of all of the objects keys
Object.prototype.keys = function () {
  return Object.keys(this);
}

// Returns an array of all of the objects values
Object.prototype.values = function () {
  return Object.values(this);
}