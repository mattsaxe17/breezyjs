import './comparison'

// Returns an exact copy of a collection
Object.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this));
}

// Runs the provided function on each primitive value in the collection, mutating the original. Returns undefined
Object.prototype.deepForEach = function (func) {
  let traverse = function(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        continue;
      }

      if (typeof obj[key] === 'object') {
        traverse(obj[key]);
      } else {
        obj[key] = func(obj[key]);
      }
    }
  }

  traverse(this);
}

// Runs the provided function on each primitive value in the collection, returning a copy and leaving the original collection untouched
Object.prototype.deepMap = function (func) {
  let copy = {...this};

  let traverse = function(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        continue;
      }
      if (typeof obj[key] === 'object') {
        traverse(obj[key]);
      } else {
        obj[key] = func(obj[key]);
      }
    }
  }
  traverse(copy);

  return copy;
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

// Returns a new object with all primitive values stringified
Object.prototype.strings = function () {
  return this.deepMap(primitive => {
    return primitive.toString();
  });
}

// Returns a new object with all primitive values casted as numbers, if possible (booleans converted to 0 and 1 for false and true, respectively)
Object.prototype.numbers = function (placeHolder = false) {
  return this.deepMap(primitive => {
    if (typeof primitive === 'string') {
      let parsed = parseFloat(primitive)
      return isNaN(parsed) ? primitive : parsed;
    } else if (typeof primitive === 'boolean') {
      return primitive ? 1 : 0;
    }
    return primitive;
  });
}

// TODO: Implement
Object.prototype.partition = function () {

}