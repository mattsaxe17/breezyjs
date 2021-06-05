// Bounds a number to greater than or equal to min and less than or equal to max
Number.prototype.clamp = function (min, max) {
  if (this < min) return min;
  if (this > max) return max;
  return this;
}

// Returns a number rounded to the nearest multiple of the provided step value
Number.prototype.round = function (step) {
  let decimalPlaces;
  let str = step.toString();

  if (str.indexOf('.') !== -1) {
    decimalPlaces = step.toString().length - step.toString().indexOf('.') - 1;
  } else {
    decimalPlaces = 0;
  }

  return Math.round(this / step) * step;
}

// Loops to invoke a function n times; i is available
Number.prototype.times = function (func) {
  for (let i = 0; i < this; i++) {
    func(i);
  }
}