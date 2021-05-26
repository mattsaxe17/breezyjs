// Performs a deep equality check and returns true or false; uses strict equality (===) for primitive types
Object.prototype.isEqual = function (object) {
  let equal = true;

  let checkEquality = function(obj1, obj2) {
    for (let key in obj1) {
      if (typeof obj1[key] === 'function') {
        if (obj1[key].toString() !== obj2[key]?.toString()) {
          equal = false;
          break;
        }
      }
      if (typeof obj1[key] === 'object') {
        checkEquality(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) {
          equal = false;
          break;
        }
      }
    }
  }
  checkEquality(this, object);

  return equal;
}

// Checks if the two collections provided have the same "shape" of data. Array lengths are ignored, and instead the individual items are checked for
// like shape with the other items in the corresponding array; All array elements in arrays (however deeply nested) must have the same data shape.
Object.prototype.hasSameShape = function (object) {
  let hasSameShape = true;

  // let traverse = function(obj1, obj2) {
  //   for (let key in obj) {
  //     if (typeof obj[key] === 'function') {
  //       continue;
  //     }
  //     if (typeof obj[key] === 'object') {
  //       traverse(obj[key]);
  //     } else {
  //       obj[key] = func(obj[key]);
  //     }
  //   }
  // }

}