var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/value');
require('../../lib/methods/array/index');

describe('Array format methods', () => {
  describe('Array.prototype.flatten', () => {
    it('should return an array', () => {
      expect([].flatten()).to.be.a('array');
    });
  });
});
