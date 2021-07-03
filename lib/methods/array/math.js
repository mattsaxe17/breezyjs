const { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } = require('../../error/helpers');

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
Array.prototype.sumOf = function (path) {
  requireArgs('sumOf', [path]);
  typeCheckArgs('sumOf', arguments, ['string']);


  let sum = 0;
  const getValue = (obj, path) => {
    if (path.includes('.') || path.includes('[')) {
      let pathArr = path.split(/([\[\]\.])+/g).pull(['.', '[', ']', '']);
      let val = pathArr.shift();

      return getValue(obj[val], pathArr.join('.'));
    } else {
      return obj[path];
    }
  }

  this.forEach(item => {
    sum += getValue(item, path);
  });

  return sum;
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