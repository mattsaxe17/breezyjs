// Performs a deep equality check; handles nested collections
Object.prototype.isEqual = function (object) {
  return JSON.stringify(this) === JSON.stringify(object);
}

// Returns true if collection has no enumerable properties
Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
}

// Returns true if all values are falsey; handles nested collections
Object.prototype.allFalsey = function () {
  let primitives = { ...this.primitives() };

  for (let key in primitives) {
    if (!!primitives[key] && typeof primitives[key] != 'function') {
      return false;
    }
  }
  return true;
}