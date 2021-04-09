// Returns a sorted array in the specified sort-direction
Array.prototype.sort = function (direction = 'asc') {
  if (!['asc', 'desc', 0, 1].includes(direction)) throw new Error('PROTOLIB ERR: (Function "sort") Sort direction must be either 0 or "asc" (for ascending), or 1 or "desc" for descending. Was given ' + direction);

  if (this.length <= 1) {
    return this;
  }
  let middle = Math.floor(this.length / 2);
  let left = this.slice(0, middle);
  let right = this.slice(middle);
  let merge = function (arr1, arr2) {
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
  if (direction == 'desc' || direction == 1) return merge(left.sort(), right.sort()).reverse();
  return merge(left.sort(), right.sort());
}

// Randomizes the order of the array
Array.prototype.shuffle = function () {
  this.forEach((item, ind) => {
    let randInd = Math.floor(Math.random() * this.length);
    [this[ind], this[randInd]] = [this[randInd], this[ind]]
  });
  return this;
}

Array.prototype.orderBy = function () {

}

Array.prototype.sortBy = function () {

}

//Aliases
Array.prototype.randomize = Array.prototype.shuffle;