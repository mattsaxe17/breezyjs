Array.prototype.delimit = function (delimiter = ',') {
  return this.reduce((acc, curr, ind) => {
    if (ind == this.length - 1) return acc + curr;
    return acc + curr + delimiter;
  }, '');
}