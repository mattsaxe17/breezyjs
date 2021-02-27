Array.prototype.sort = function (direction = 'asc') {
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

Array.prototype.orderBy = function () {

}

Array.prototype.sortBy = function () {

}