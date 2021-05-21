// Returns the difference bewtween two dates in milliseconds
Date.prototype.difference = function (date) {
  return Math.abs(this - date);
}