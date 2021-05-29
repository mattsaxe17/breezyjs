import './format'

// Gets the sum of numbers in a range of an array, will flatten arrays and try to cast strings to numbers
Array.prototype.sum = function () {
  let arr = this.flatten();

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      let parsed = parseFloat(arr[i]);
      if (parsed != NaN) {
        sum += parsed;
      }
    } else if (typeof arr[i] != 'number') {
      continue;
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

// Rounds all numbers to closest multiple of step
Array.prototype.roundAll = function (step) {
  if (!arguments[0]) throw new ProtoJsRequiredArgumentError('roundAll', 0);

  return this.map(item => {
    if (typeof item === 'number') {
      item = item.round(step)
    }
    return item;
  });
}