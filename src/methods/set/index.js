import { requireArgInstanceOf } from '../../error/helpers';

Set.prototype.union = function (set) {
  requireArgInstanceOf('union', arguments, [[Set, Array]]);

  let arr1 = new Array(...this),
      arr2 = new Array(...set);

  return new Set([...arr1, ...arr2]);
}

Set.prototype.intersection = function (set) {
  requireArgInstanceOf('intersection', arguments, [[Set, Array]]);

  let arr1 = new Array(...this),
      arr2 = new Array(...set),
      ret = new Set();

  arr1.forEach(item => {
    if (arr2.includes(item)) {
      ret.add(item);
    }
  })

  arr2.forEach(item => {
    if (arr1.includes(item)) {
      ret.add(item);
    }
  })
  return ret;
}