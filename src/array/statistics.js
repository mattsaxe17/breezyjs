Array.prototype.mean = function () {
  return this.sum() / this.length;
}

Array.prototype.median = function () {
  var sorted = this.sort();
  if (sorted.length % 2 == 1) {
    return sorted[Math.floor(sorted.length / 2)];
  } else {
    let middle = Math.floor(sorted.length / 2);
    return [sorted[middle - 1], sorted[middle]].mean();
  }
}

Array.prototype.mode = function () {
  let counter = {};
  let mode = [];
  let max = 0;
  this.forEach(num => {
    if (counter[num]) {
      counter[num] = counter[num] + 1;
    } else {
      counter[num] = 1;
    }
  });
  for (var num in counter) {
    if (counter[num] > max) {
      mode = [];
      mode.push(parseInt(num));
      max = counter[num];
    } else if (counter[num] == max) {
      mode.push(parseInt(num));
    }
  }
  if (mode.length == 1) return mode[0];
  return mode;
}

Array.prototype.range = function () {
  let sorted = this.sort();
  return sorted[sorted.length - 1] - sorted[0];
}

Array.prototype.interquartileRange = function () {
  let sorted = this.sort();
  let left, right = [];
  let middle = Math.floor(sorted.length / 2);
  left = sorted.slice(0, middle);
  if (sorted.length % 2 == 1) middle++;
  right = sorted.slice(middle);
  return right.median() - left.median();
}

Array.prototype.variance = function (type = 'population') {
  let mean = this.mean();
  let count = this.length;
  return this.map((num) => {
    return Math.pow((num - mean), 2)
  }).sum() / (count - (type == 'sample' ? 1 : 0));
}

Array.prototype.standardDeviation = function (type = 'population') {
  return Math.pow(this.variance(type), .5);
}

//Aliases
Array.prototype.avg = Array.prototype.mean;
Array.prototype.midspread = Array.prototype.interquartileRange;
