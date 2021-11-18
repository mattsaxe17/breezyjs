var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/array/comparison');

describe('Array comparison methods', () => {
  describe('Array.prototype.difference', () => {
    it('should return an array with items from the first array', () => {
      expect([1, 2, 3].difference([])).to.be.a('array');
      expect([1, 2, 3].difference([])).to.eql([1, 2, 3]);
    });

    it('should not return items from the second array', () => {
      expect([1, 2].difference([4, 5, 6])).to.eql([1, 2]);
    });

    it('should not return items in both arrays', () => {
      expect([1, 2, 3, 4].difference([2, 4])).to.eql([1, 3]);
    });
  });

  describe('Array.prototype.differenceBy', () => {
    it('should return an array with items from the first array', () => {
      expect([1, 2, 3, 4].differenceBy([], num => num % 10)).to.be.a('array');
      expect([1, 2, 3, 4].differenceBy([], num => num % 10)).to.eql([1, 2, 3, 4]);
    });

    it('should not return items from the second array', () => {
      expect([1, 2].differenceBy([4, 5, 6], num => num % 10)).to.eql([1, 2]);
    });

    it('should not return items from both arrays that return the same value when passed to iteree function', () => {
      expect([1, 2, 13, 14].differenceBy([1, 3], num => num % 10)).to.eql([2, 14]);
    });
  });
});
