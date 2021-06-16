import { typeCheckArgs, requireArgInstanceOf } from '../../error/helpers';

// Returns the difference bewtween two dates in milliseconds
Date.prototype.difference = function (date) {
  typeCheckArgs('difference', arguments, ['object']);
  requireArgInstanceOf('difference', arguments, [Date]);

  return Math.abs(this - date);
}