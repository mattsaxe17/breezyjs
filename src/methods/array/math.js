import { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } from '../../error/helpers';

// Gets the sum of numbers in a range of an array, will try to cast strings to numbers
Array.prototype.sum = function (from = 0, to = Infinity) {
  typeCheckArgs('sum', arguments, ['number', 'number']);

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

//
Array.prototype.sumOf = function () {

}

// Rounds all numbers to closest multiple of step
Array.prototype.roundAll = function (step = 1) {
  typeCheckArgs('roundAll', arguments, ['number']);

  return this.map(item => {
    if (typeof item === 'number') {
      item = item.round(step)
    }
    return item;
  });
}