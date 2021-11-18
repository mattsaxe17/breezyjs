var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/array/index');

describe('Array math methods', () => {
  describe('Array.prototype.sum', () => {
    it('should return the sum of all numbers in an array', () => {
      expect([1, 3, 4, 5].sum()).to.equal(13);
    });

    it('should parse strings into numbers if possible', () => {
      expect(['12', '4', 'hi'].sum()).to.equal(16);
    });
  });

  describe('Array.prototype.sumOf', () => {
    it('should return the sum of all numbers in an array at a certain path', () => {
      let players = [
        { name: 'John', team: 'Red', points: 23 },
        { name: 'Rigley', team: 'Blue', points: 13 },
        { name: 'Bimbo', team: 'Red', points: 8 },
        { name: 'Jane', team: 'Blue', points: 31 },
      ];

      expect(players.sumOf('points')).to.equal(75);
    });
  });

  describe('Array.prototype.roundAll', () => {
    it('should round all numbers in an array to specified step', () => {
      expect([1.2, 4.8, 8.2, 2.6, 3.4, 2.8, 5.1].roundAll(0.5)).to.eql([1, 5, 8, 2.5, 3.5, 3, 5]);
    });
  });
});
