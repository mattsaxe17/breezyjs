import './format'
import './math'
import './sort'
import './statistics'

import { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } from '../../error/helpers';

// Pops the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.popN = function (n = 1) {
  typeCheckArgs('popN', arguments, ['number']);
  requireWholeNumbers('popN', arguments, [0]);
  requirePositiveNumbers('popN', arguments, [0]);

  if (n >= this.length) {
    let ret = this.slice();
    this.length = 0;
    return ret;
  }

  const popped = [];
  for (let i = 0; i < n; i++) {
    popped.unshift(this[this.length - 1]);
    this.length--;
  }
  return popped;
}

// Shifts the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.shiftN = function (n = 1) {
  typeCheckArgs('shiftN', arguments, ['number']);
  requireWholeNumbers('shiftN', arguments, [0]);
  requirePositiveNumbers('shiftN', arguments, [0]);

  if (n >= this.length) {
    let ret = this.slice();
    this.length = 0;
    return ret;
  }

  this.reverse();

  const shifted = [];
  for (let i = 0; i < n; i++) {
    shifted.push(this[this.length - 1]);
    this.length--;
  }
  this.reverse();
  return shifted;
}

// Returns a new array with the provided values inserted into the array at the provided index
Array.prototype.insert = function (index, values) {
  requireArgs('insert', [index, values])
  typeCheckArgs('insert', arguments, ['number', 'array']);
  requirePositiveNumbers('shiftN', arguments, [0]);

  if (index === 0 || index === 'start') {
    return values.concat(this);
  } else if (index > this.length - 1 || index === 'end') {
    return this.concat(values);
  } else {
    let start = this.slice(0, index);
    let end = this.slice(index - 1);
    return start.concat(values).concat(end);
  }
}

// Returns a new array with the number of values removed from the array, starting at the provided index
Array.prototype.remove = function (index, length = 1) {
  requireArgs('remove', [index])
  typeCheckArgs('remove', arguments, ['number', 'number']);
  requirePositiveNumbers('remove', arguments, [0, 1]);

  let start = this.slice(0, index);
  let end = this.slice(index + length);
  return start.concat(end);
}

// Gets the element of an aray at a certain index, with negative values allowed
Array.prototype.at = function (n) {
  requireArgs('at', [n]);
  typeCheckArgs('at', arguments, ['number']);
  genericErrorCheck(n < 0 - this.length || n > this.length - 1, 'at', `Cannot get element at index "${n}" from an array with length of ${this.length}`);

  if (n < 0) {
    n = this.length + n;
  }
  return this[n];
}


// Gets first element of an array
Array.prototype.first = function () {
  return this[0];
}

// Gets last element of an array
Array.prototype.last = function () {
  return this[this.length - 1];
}

// Removes a value if it is present in an array, and adds it if it's not
Array.prototype.toggle = function (value) {
  requireArgs('toggle', [value]);

  if (value.within(this)) {
    this.splice(this.indexOf(value), 1);
  } else {
    this.push(value);
  }
  return this;
}

// Returns the amount of times a provided value appears in an array
Array.prototype.count = function (value) {
  requireArgs('count', [value]);

  return this.reduce((acc, cur) => {
    if (value.equals(cur)) {
      acc++;
    }
    return acc;
  }, 0);
}

// Returns an object with keys representing a value from the original array, and values representing the number of times the value was found
Array.prototype.group = function () {
  return this.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}

// Pushes value to array if it is not already present
Array.prototype.pushUniq = function(value) {
  requireArgs('pushUniq', [value]);

  if (!value.within(this)) {
    this.push(value);
  }
  return this.length;
}

// Returns a new array with specified values removed
Array.prototype.pull = function (values) {
  requireArgs('pushUniq', [values]);
  typeCheckArgs('pull', arguments, ['array']);

  return this.filter(item => {
    return !item.within(values);
  })
}