var assert = require('assert');
var expect = require('chai').expect;
require('../../lib/methods/value');
require('../../lib/methods/array/index');

describe('Array methods', () => {
  describe('Array.prototype.popN', () => {
    it('should return an array', () => {
      expect([1, 2, 3].popN(2)).to.be.a('array');
    });

    it('should return an array of popped items from end of array', () => {
      let arr = [1, 2, 3, 4];
      let popped = arr.popN(2);

      expect(popped).to.eql([3, 4]);
      expect(arr).to.eql([1, 2]);
    });
  });

  describe('Array.prototype.shiftN', () => {
    it('should return an array', () => {
      expect([1, 2, 3].shiftN(2)).to.be.a('array');
    });

    it('should return an array of shifted items from beginning of array', () => {
      let arr = [1, 2, 3, 4];
      let popped = arr.shiftN(2);

      expect(popped).to.eql([1, 2]);
      expect(arr).to.eql([3, 4]);
    });
  });

  describe('Array.prototype.first', () => {
    it('should return the first element of an array', () => {
      expect([1, 2, 3].first()).to.equal(1);
    });
  });

  describe('Array.prototype.last', () => {
    it('should return the last element of an array', () => {
      expect([1, 2, 3].last()).to.equal(3);
    });
  });

  describe('Array.prototype.count', () => {
    it('should return a number', () => {
      expect([].count(1)).to.be.a('number');
    });

    it('should count the number of occurences of the specified value', () => {
      expect([1, 2, 2, 5, 3, 2].count(2)).to.equal(3);
    });
  });

  describe('Array.prototype.countBy', () => {
    it('should return a number', () => {
      expect([1, 2].countBy(item => !!item)).to.be.a('number');
    });

    it('should count the number of elements that cause the iteree function to return true', () => {
      expect([1, 2, 2, 5, 3, 4].countBy(num => num % 2 === 0)).to.equal(3);
    });
  });

  describe('Array.prototype.group', () => {
    it('should return an object', () => {
      expect(['hi', 'bye', 'hi', 'hi', 'sup'].group()).to.be.a('object');
    });

    it('should count the number of elements that cause the iteree function to return true', () => {
      expect(['hi', 'bye', 'hi', 'hi', 'sup'].group()).to.have.property('hi').and.to.equal(3);
    });
  });

  describe('Array.prototype.group', () => {
    it('should return the length of the array after the push', () => {
      expect([1, 2].pushUniq(3)).to.equal(3);
    });

    it('should only push items to the array that are not already present', () => {
      let arr = [1, 2, 3];
      arr.pushUniq(1);
      arr.pushUniq(4);
      arr.pushUniq(5);
      arr.pushUniq(5);

      expect(arr).to.eql([1, 2, 3, 4, 5]);
    });
  });

  describe('Array.prototype.pull', () => {
    it('should return an array', () => {
      expect([1, 2, 3].pull([3])).to.be.a('array');
    });

    it('should pull specified items from array', () => {
      expect([1, 2, 3, 4, 5, 6, 6, 3, 7, 6, 7].pull([2, 7])).to.eql([1, 3, 4, 5, 6, 6, 3, 6]);
    });
  });

  describe('Array.prototype.where', () => {
    it('should filter by each function passed to it', () => {
      let players = [
        { name: 'John', team: { name: 'Red Sox', color: 'Red' }, points: 23 },
        { name: 'Rigley', team: { name: 'Blue Beans', color: 'Blue' }, points: 13 },
        { name: 'Bimbo', team: { name: 'Red Sox', color: 'Red' }, points: 8 },
        { name: 'Jane', team: { name: 'Blue Beans', color: 'Blue' }, points: 31 },
      ];

      expect(players.where('team.color', 'Red')).to.have.lengthOf(2);
    });
  });
});
