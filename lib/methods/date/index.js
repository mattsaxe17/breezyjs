const { typeCheckArgs, requireArgInstanceOf } = require('../../error/helpers');

// Returns the difference bewtween two dates in milliseconds
Date.prototype.difference = function (date) {
  requireArgs('difference', [date]);
  typeCheckArgs('difference', arguments, ['object']);
  requireArgInstanceOf('difference', arguments, [Date]);

  return Math.abs(this - date);
}