const { genericErrorCheck, requireArgs, typeCheckArgs, requireWholeNumbers, requirePositiveNumbers } = require('../../error/helpers');

// Returns a sorted array in the specified sort-direction
Array.prototype.mergeSort = function (direction = 'asc') {
  typeCheckArgs('mergeSort', arguments, [['string', 'number']]);
  genericErrorCheck(!direction.within(['asc', 'desc', 0, 1]), 'mergeSort', `Sort direction must be either 0, "asc" (for ascending), 1 or "desc" (for descending), but was ${direction}`);

  if (this.length <= 1) {
    return this;
  }
  let middle = Math.floor(this.length / 2);
  let left = this.slice(0, middle);
  let right = this.slice(middle);

  let merge = (arr1, arr2) => {
    let result = [];
    let ind1 = 0;
    let ind2 = 0;
    while (ind1 < arr1.length && ind2 < arr2.length) {
      if (arr1[ind1] > arr2[ind2]) {
        result.push(arr2[ind2]);
        ind2++;
      } else {
        result.push(arr1[ind1]);
        ind1++;
      }
    }
    return result.concat(arr1.slice(ind1)).concat(arr2.slice(ind2));
  }
  if (direction == 'desc' || direction == 1) return merge(left.mergeSort(), right.mergeSort()).reverse();
  return merge(left.mergeSort(), right.mergeSort());
}

// Randomizes the order of the array
Array.prototype.shuffle = function () {
  this.forEach((item, ind) => {
    let randInd = Math.floor(Math.random() * this.length);
    [this[ind], this[randInd]] = [this[randInd], this[ind]]
  });
  return this;
}

// Returns a new, sorted array; sorted by the result of calling the function(s) on each element
Array.prototype.sortBy = function (func, direction = 'asc') {
  requireArgs('sortBy', [func]);
  typeCheckArgs('sortBy', arguments, [['function', 'array'], ['string', 'number']]);
  genericErrorCheck(!direction.within(['asc', 'desc', 0, 1]), 'sortBy', `Sort direction must be either 0, "asc" (for ascending), 1 or "desc" (for descending), but was ${direction}`);

  if (typeof func === 'function') {
    let sortVals = [];
    let ret = [];
    let indexes = [];

    this.forEach(item => {
      sortVals.push(func(item));
    });

    sortVals = sortVals.mergeSort(direction);

    sortVals.forEach(val => {
      ret.push(
        this.find((item, ind) => {
          let found = func(item) === val && !indexes.includes(ind);
          if (found) indexes.push(ind);
          return found;
        })
      );
    });
    return ret;
  } else {
    if (func.length > 1) {
      return this.sortBy(func.pop(), direction).sortBy(func, direction);
    } else {
      return this.sortBy(func.pop(), direction);
    }
  }
}

