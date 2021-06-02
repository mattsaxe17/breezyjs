import './format'

// Gets the sum of numbers in a range of an array, will try to cast strings to numbers
Array.prototype.sum = function (from = 0, to = Infinity) {
  if (typeof from !== 'number') throw new ProtoJsTypeError('sum', 0, 'number', typeof from);
  if (typeof to !== 'number') throw new ProtoJsTypeError('sum', 1, 'number', typeof to);

  return this.reduce((acc, cur, ind) => {
    if (ind < from || ind > to) return acc;

    if (typeof cur === 'string') {
      let parsed = parseFloat(cur);
      if (!Number.isNaN(parsed)) {
        acc += parsed;
      }
    } else {
      acc += cur;
    }
    return acc;
  }, 0)
}

Array.prototype.sumOf = function () {

}

// Rounds all numbers to closest multiple of step
Array.prototype.roundAll = function (step) {
  if (!arguments[0]) throw new ProtoJsRequiredArgumentError('roundAll', 0);
  if (typeof step !== 'number') throw new ProtoJsTypeError('roundAll', 0, 'number', typeof step);

  return this.map(item => {
    if (typeof item === 'number') {
      item = item.round(step)
    }
    return item;
  });
}