import { typeCheckArgs, requireArgs } from '../../error/helpers';

Object.prototype.forEach = function (func) {
  requireArgs('forEach', [func]);
  typeCheckArgs('forEach', arguments, ['function']);

  this.keys().forEach(key => {
    func(this[key], key, this);
  });
}

Object.prototype.map = function (func) {
  requireArgs('map', [func]);
  typeCheckArgs('map', arguments, ['function']);

  return this.keys().map(key => {
    return func(this[key], key, this);
  });
}

Object.prototype.reduce = function (func, accumulator) {
  requireArgs('reduce', [func]);
  typeCheckArgs('reduce', arguments, ['function', ['string', 'number', 'object', 'array', 'boolean']]);

  return this.keys().reduce((acc, cur) => {
    return func(accumulator, this[cur], cur, this);
  }, accumulator);
}

Object.prototype.filter = function (func) {
  requireArgs('filter', [func]);
  typeCheckArgs('filter', arguments, ['function']);

  let filteredKeys = this.keys().filter((item) => {
    return func(this[item], item, this);
  });

  return filteredKeys.reduce((acc, cur) => {
    acc[cur] = this[cur];
    return acc;
  }, {});
}

Object.prototype.some = function (func) {
  requireArgs('some', [func]);
  typeCheckArgs('some', arguments, ['function']);

  return this.keys().some(key => {
    return func(this[key], key, this);
  });
}

Object.prototype.every = function (func) {
  requireArgs('forEachDeep', [func]);
  typeCheckArgs('every', arguments, ['function']);

  return this.keys().every(key => {
    return func(this[key], key, this);
  });
}