// Checks if the two collections provided have the same "shape" of data. Array lengths are ignored, and instead the individual items are checked for
// like shape with the other items in the corresponding array; All array elements in arrays must have the same data shape.
Object.prototype.hasSameShape = function (collection) {
  let hasSameShape = true;

  let traverse = (obj1, obj2) => {

  }

  traverse(this, collection);

  return hasSameShape;
}