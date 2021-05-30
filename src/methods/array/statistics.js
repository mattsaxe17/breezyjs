import { ProtoJsError, ProtoJsTypeError, ProtoJsDecimalError } from '../../error'

Array.prototype.mean = function () {
  return this.sum() / this.length;
}

Array.prototype.median = function () {
  var sorted = this.mergeSort();
  if (sorted.length % 2 == 1) {
    return sorted[Math.floor(sorted.length / 2)];
  } else {
    let middle = Math.floor(sorted.length / 2);
    return [sorted[middle - 1], sorted[middle]].mean();
  }
}

Array.prototype.mode = function (forceArray = false) {
  if (typeof from !== 'boolean') throw new ProtoJsTypeError('mode', 0, 'boolean', typeof forceArray);

  let counter = this.group();
  let mode = [];
  let max = 0;

  for (var num in counter) {
    if (counter[num] > max) {
      mode = [];
      mode.push(parseInt(num));
      max = counter[num];
    } else if (counter[num] == max) {
      mode.push(parseInt(num));
    }
  }

  if (mode.length == 1 && !forceArray) return mode[0];
  return mode;
}

Array.prototype.range = function () {
  let sorted = this.mergeSort();
  return sorted.last() - sorted.first();
}

Array.prototype.interquartileRange = function () {
  let sorted = this.mergeSort();
  let left, right = [];
  let middle = Math.floor(sorted.length / 2);
  left = sorted.slice(0, middle);
  if (sorted.length % 2 == 1) middle++;
  right = sorted.slice(middle);
  return right.median() - left.median();
}

Array.prototype.variance = function (type = 'population') {
  if (typeof type !== 'string') throw new ProtoJsTypeError('variance', 0, 'string', typeof type);
  if (!type.within(['population', 'sample'])) throw new ProtoJsError('variance', `Argument at index of 0 (arguments[0]) must be either "sample" or "population", but was ${type}`);

  let mean = this.mean();
  let count = this.length;
  return this.map((num) => {
    return Math.pow((num - mean), 2)
  }).sum() / (count - (type === 'sample' ? 1 : 0));
}

Array.prototype.standardDeviation = function (type = 'population') {
  if (typeof type !== 'string') throw new ProtoJsTypeError('standardDeviation', 0, 'string', typeof type);
  if (!type.within(['population', 'sample'])) throw new ProtoJsError('standardDeviation', `Argument at index of 0 (arguments[0]) must be either "sample" or "population", but was ${type}`);

  return Math.pow(this.variance(type), .5);
}

Array.prototype.union = function (arr) {
  if (!Array.isArray(arr)) throw new ProtoJsTypeError('union', 0, 'object (array)', typeof arr);

  let set = new Set(this);
  set = set.union(new Set(arr));
  return new Array(...set);
}

Array.prototype.intersection = function (arr) {
  if (!Array.isArray(arr)) throw new ProtoJsTypeError('intersection', 0, 'object (array)', typeof arr);

  let set = new Set(this);
  set = set.intersection(new Set(arr));
  return new Array(...set);
}

Array.prototype.sample = function (size = 1) {
  if (typeof size !== 'number') throw new ProtoJsTypeError('sample', 0, 'number', typeof size);
  if (size % 1 !== 0)throw new ProtoJsDecimalError('sample', 0, size);

  let arr = this.slice();
  if (size == 1) return arr[random(this.length)];
  for (var i = 0; i < size; i++) {
    return arr.shuffle().slice(0, size)
  }
}

//Aliases
Array.prototype.avg = Array.prototype.mean;
Array.prototype.midspread = Array.prototype.interquartileRange;
