Array.prototype.sum = function (first = 0, last = this.length - 1) {
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += this[i];
  }
  return sum;
}