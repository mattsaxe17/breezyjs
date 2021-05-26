import { ProtoJsTypeError } from '../../error/index'

// Returns a new array containing elements that are present in the first array, but not the second
Array.prototype.difference = function (arr) {
  if (!Array.isArray(arr)) throw new ProtoJsTypeError('difference', 0, 'array', typeof arr);

  return this.filter(item => !arr.includes(item));
}

// Returns a new array containing elements that, when passed to func, are present in the first array, but not the second
Array.prototype.differenceBy = function (arr, func) {
  if (!Array.isArray(arr)) throw new ProtoJsTypeError('differenceBy', 0, 'array', typeof arr);
  if (typeof func !== 'function') throw new ProtoJsTypeError('differenceBy', 1, 'function', typeof func);

  arr = arr.map(item => func(item));
  return this.filter(item => !arr.includes(func(item)));
}