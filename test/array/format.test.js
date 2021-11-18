var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/array/format');

describe('Array format methods', () => {
  describe('Array.prototype.flatten', () => {
    it('should return an array', () => {
      expect([].flatten()).to.be.a('array');
    });

    it('should remove nested arrays', () => {
      expect([[[1, 2, 3, [4, 5, [6]]], 7], 8, 9].flatten()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Array.prototype.compact', () => {
    it('should return an array', () => {
      expect([].compact()).to.be.a('array');
    });

    it('should remove falsey values', () => {
      expect(['', false, 0, -0, null, undefined, NaN].compact()).to.eql([]);
    });
  });

  describe('Array.prototype.dropLeft', () => {
    it('should return an array', () => {
      expect([1, 2, 3].dropLeft()).to.be.a('array');
    });

    it('should drop specified number of values from beginning of array', () => {
      expect([1, 2, 3, 4, 5].dropLeft(2)).to.eql([3, 4, 5]);
    });
  });

  describe('Array.prototype.dropRight', () => {
    it('should return an array', () => {
      expect([1, 2, 3].dropRight()).to.be.a('array');
    });

    it('should drop specified number of values from end of array', () => {
      expect([1, 2, 3, 4, 5].dropRight(2)).to.eql([1, 2, 3]);
    });
  });

  describe('Array.prototype.chunk', () => {
    it('should return an array', () => {
      expect([1, 2, 3, 4].chunk(2)).to.be.a('array');
    });

    it('should break an array into chunks of the specified size', () => {
      expect([1, 2, 3, 4, 5].chunk(2)).to.eql([[1, 2], [3, 4], [5]]);
    });
  });
});
