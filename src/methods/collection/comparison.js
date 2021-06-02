// Checks if the two collections provided have the same "shape" of data. Array lengths are ignored, and instead the individual items are checked for
// like shape with the other items in the corresponding array; All array elements in arrays (however deeply nested) must have the same data shape.
// Object.prototype.hasSameShape = function (object) {
  // let hasSameShape = true;
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
// }