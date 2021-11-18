require('./format');
require('./math');
require('./sort');
require('./statistics');

const { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } = require('../../error/helpers');

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
};

// Shifts the specified number of elements from the beginning of the array, returns an array of popped elements
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
};

// Gets first element of an array
Array.prototype.first = function () {
  return this[0];
};

// Gets last element of an array
Array.prototype.last = function () {
  return this[this.length - 1];
};

// Removes a value if it is present in an array, and adds it if it's not
Array.prototype.toggle = function (value) {
  requireArgs('toggle', [value]);

  if (value.within(this)) {
    this.splice(this.indexOf(value), 1);
  } else {
    this.push(value);
  }
  return this;
};

// Returns the amount of times a provided value appears in an array
Array.prototype.count = function (value) {
  requireArgs('count', [value]);

  return this.reduce((acc, cur) => {
    if (value.equals(cur)) {
      acc++;
    }
    return acc;
  }, 0);
};

// Returns the number of elements that cause a provided function to return true
Array.prototype.countBy = function (func) {
  requireArgs('countBy', [func]);
  typeCheckArgs('countBy', arguments, ['function']);

  return this.reduce((acc, cur) => {
    let current;

    try {
      current = func(cur);
    } catch {
      current = false;
    }

    if (current) {
      acc++;
    }
    return acc;
  }, 0);
};

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
};

// Pushes value to array if it is not already present
Array.prototype.pushUniq = function (value) {
  requireArgs('pushUniq', [value]);

  if (!value.within(this)) {
    this.push(value);
  }
  return this.length;
};

// Returns a new array with specified values removed
Array.prototype.pull = function (values) {
  requireArgs('pushUniq', [values]);
  typeCheckArgs('pull', arguments, ['array']);

  return this.filter(item => {
    return !item.within(values);
  });
};

// Filters items who's property deeply equals the value
Array.prototype.where = function (property, value) {
  let props = property.split('.');

  return this.filter(item => {
    let currentProp = item;

    props.forEach(prop => {
      currentProp = currentProp[prop];
    });

    return currentProp.equals(value);
  });
};
