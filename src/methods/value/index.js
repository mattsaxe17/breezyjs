import { ProtoJsTypeError } from '../../error'

// Performs a deep equality check and returns true or false; uses strict equality (===) for primitive types
Object.prototype.equals = function (value) {
  let equal = true;

  let checkEquality = function (val1, val2) {
    if (typeof val2 !== 'object') {
      return val1 === val2;
    } else {
      for (let key in val1) {
        if (typeof val1[key] === 'function') {
          if (val1[key].toString() !== val2[key]?.toString()) {
            equal = false;
            break;
          }
        }
        if (typeof val1[key] === 'object') {
          checkEquality(val1[key], val2[key]);
        } else {
          if (val1[key] !== val2[key]) {
            equal = false;
            break;
          }
        }
      }
    }
  }
  checkEquality(this, value);
  return equal;
}


// Returns true if a value is within an array, handles objects
Object.prototype.within = function (arr) {
  if (!Array.isArray(arr)) throw new ProtoJsTypeError('within', 0, 'object (array)', typeof arr);

  let val = this.valueOf();

  return arr.reduce((acc, cur) => {
    if (typeof val === 'object') {
      if (cur.equals(this)) acc = true;
    } else {
      if (cur === val) acc = true;
    }
    return acc;
  }, false);
}

// Gets a values type
Object.prototype.type = function () {
  return typeof this;
}

// Checks if object is of specific type
Object.prototype.isType = function (testType) {
  return typeof this === testType;
}