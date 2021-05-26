// Returns a delimited string from an given array
Array.prototype.delimit = function (delimiter = ',') {
  if (typeof delimiter != 'string') throw new ProtoJsError('delimit', `Can only take parameter of type "string", was given ${typeof delimiter}`);

  if(this.length < 1) return '';

  return this.reduce((acc, curr, ind) => {
    if (ind == this.length - 1) return acc + curr;
    return acc + curr + delimiter;
  }, '');
}

// Returns a new flattened array, pulling nested array elements to the top-level array
Array.prototype.flatten = function () {
  if(this.length < 1) return [];

  let arr = [];
  this.forEach((item) => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.flatten());
    } else {
      arr.push(item);
    }
  });
  return arr;
}

// Returns a new array with falsey values removed
Array.prototype.compact = function () {
  if(this.length < 1) return [];

  return this.filter((item) => !!item);
}

// Returns a new array with the specified number of elements dropped from the left side
Array.prototype.dropLeft = function (n = 1) {
  if (typeof n != 'number') throw new Error('PROTOLIB ERR: (Function "dropLeft") can only take parameter of type "number", was given "' + typeof n + '"');
  if (n % 1 != 0) throw new Error('PROTOLIB ERR: (Function "dropLeft") can only take parameter that is a whole number, was given "' + n + '"');
  if(this.length < 1) return [];

  return this.slice(n);
}

// Returns a new array with the specified number of elements dropped from the right side
Array.prototype.dropRight = function (n = 1) {
  if (typeof n != 'number') throw new Error('PROTOLIB ERR: (Function "dropRight") can only take parameter of type "number", was given "' + typeof n + '"');
  if (n % 1 != 0) throw new Error('PROTOLIB ERR: (Function "dropRight") can only take parameter that is a whole number, was given "' + n + '"');
  return this.slice(0, 0 - n);
}

// Returns an array of chunjed arrays with the specified length; the last chunk may not be full
Array.prototype.chunk = function (size) {
  return this.reduce((acc, cur) => {
    if (acc[acc.length - 1].length < size) {
      acc[acc.length - 1].push(cur);
    } else {
      acc.push([cur]);
    }
    return acc;
  }, [[]]);
}