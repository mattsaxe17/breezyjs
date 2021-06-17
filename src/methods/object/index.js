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

  let recurse = (obj, initialPath = '') => {
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
        recurse(obj[key], currentPath);
      } else {
        if (typeof obj[key] != 'function') {
          ret[currentPath] = obj[key];
        }
      }
    }
  }
  recurse(copy);

  return ret;
}

// Returns an object composed of specified properties taken from 'this' object
Object.prototype.pick = function (keys) {
  return keys.reduce((acc, cur) => {
    if (this[cur]) {
      acc[cur] = this[cur];
    }
    return acc;
  }, {});
}

// Returns an object composed of specified properties that return true, taken from 'this' object
Object.prototype.pickBy = function (func) {
  return this.reduce((acc, val, key) => {
    if (func(val)) {
      acc[key] = this[key];
    }
    return acc;
  }, {});
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