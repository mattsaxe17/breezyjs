import ProtoJsError from '../error.js'

// Returns a new array containing elements that are present in the second array, but not the first
Array.prototype.difference = function (arr) {
  if (!Array.isArray(arr)) throw new ProtoJsError('difference', `Can only take parameter of type "array", was given a ${typeof arr}`);
  return arr.filter(item => !this.includes(item));
}

// TODO: Implement
Array.prototype.differenceBy = function (arr, func) {

}