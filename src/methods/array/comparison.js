import { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } from '../../error/helpers';

// Returns a new array containing elements that are present in the first array, but not the second
Array.prototype.difference = function (arr) {
  requireArgs('difference', [arr]);
  typeCheckArgs('difference', arguments, ['array']);

  return this.filter(item => !arr.includes(item));
}

// Returns a new array containing elements that, when passed to func, are present in the first array, but not the second
Array.prototype.differenceBy = function (arr, func) {
  requireArgs('differenceBy', [arr, func]);
  typeCheckArgs('differenceBy', arguments, ['array', 'function']);

  arr = arr.map(item => func(item));
  return this.filter(item => !arr.includes(func(item)));
}