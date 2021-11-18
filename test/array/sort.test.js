var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/value');
require('../../lib/methods/array/index');

describe('Array format methods', () => {
  describe('Array.prototype.mergeSort', () => {
    it('should return an array', () => {
      expect([8, 1, 9, 0, 2, 5, 7].sort()).to.be.a('array');
    });

    it('should return sorted array', () => {
      expect([8, 1, 9, 0, 2, 5, 7].sort()).to.eql([0, 1, 2, 5, 7, 8, 9]);
    });
  });

  describe('Array.prototype.shuffle', () => {
    it('should return an array', () => {
      expect([8, 1, 9, 0, 2, 5, 7].shuffle()).to.be.a('array');
    });

    it('should return sorted array', () => {
      expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].shuffle()).to.not.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
  });

  describe('Array.prototype.sortBy', () => {
    it('should return an array', () => {
      expect([8, 1, 9, 0, 2, 5, 7].sortBy(item => item)).to.be.a('array');
    });

    it('should sort an array by a function', () => {
      let players = [
        { name: 'John', team: 'Red', points: 23 },
        { name: 'Rigley', team: 'Blue', points: 13 },
        { name: 'Bimbo', team: 'Red', points: 8 },
        { name: 'Jane', team: 'Blue', points: 31 },
      ];

      expect(players.sortBy(player => player.points)).to.have.property('0').and.to.eql({ name: 'Bimbo', team: 'Red', points: 8 });
      expect(players.sortBy(player => player.points)).to.have.property('3').and.to.eql({ name: 'Jane', team: 'Blue', points: 31 });
    });
  });
});
