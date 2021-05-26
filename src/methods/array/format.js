import { ProtoJsTypeError, ProtoJsDecimalError } from '../../error/index'

// Returns a delimited string from an given array
Array.prototype.delimit = function (delimiter) {
  if (typeof delimiter !== 'string') throw new ProtoJsTypeError('delimit', 0, 'string', typeof delimiter);

  if(this.length < 1) return '';

  return this.reduce((acc, curr, ind) => {
    if (ind == this.length - 1) return acc + curr;
    return acc + curr + delimiter;
  }, '');
}

// Returns a new flattened array, pulling nested array elements to the top-level array
Array.prototype.flatten = function () {
  if(this.length < 1) return [];

  let arr = [];
  this.forEach((item) => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.flatten());
    } else {
      arr.push(item);
    }
  });
  return arr;
}

// Returns a new array with falsey values removed
Array.prototype.compact = function () {
  if(this.length < 1) return [];

  return this.filter((item) => !!item);
}

// Returns a new array with the specified number of elements dropped from the left side
Array.prototype.dropLeft = function (n = 1) {
  if (typeof n != 'number') throw new ProtoJsTypeError('dropLeft', 0, 'number', typeof n);
  if (n % 1 != 0) throw new ProtoJsDecimalError('dropLeft', 0, n);

  if(this.length < 1) return [];
  return this.slice(n);
}

// Returns a new array with the specified number of elements dropped from the right side
Array.prototype.dropRight = function (n = 1) {
  if (typeof n != 'number') throw new ProtoJsTypeError('dropRight', 0, 'number', typeof n);
  if (n % 1 != 0) throw new ProtoJsDecimalError('dropRight', 0, n);

  return this.slice(0, 0 - n);
}

// Returns an array of chunjed arrays with the specified length; the last chunk may not be full
Array.prototype.chunk = function (size) {
  if (typeof n != 'number') throw new ProtoJsTypeError('chunk', 0, 'number', typeof n);
  if (n % 1 != 0) throw new ProtoJsDecimalError('chunk', 0, size);

  return this.reduce((acc, cur) => {
    if (acc[acc.length - 1].length < size) {
      acc[acc.length - 1].push(cur);
    } else {
      acc.push([cur]);
    }
    return acc;
  }, [[]]);
}