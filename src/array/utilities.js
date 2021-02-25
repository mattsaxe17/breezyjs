Array.prototype.pop = function (count = 1) {
  if (this.length < count) throw new Error('PROTOLIB ERR: Cannot pop ' + count + ' items from array with length of ' + this.length);
  if (count < 0) throw new Error('PROTOLIB ERR: Function "pop" cannot take negative number as parameter, was given ' + count);
  if (typeof count != 'number') throw new Error('PROTOLIB ERR: Function "pop" can only take parameter of type Number, was given "' + count + '"');

  if (count == 1) {
    let end = this[this.length - 1];
    this.length--;
    return end;
  }
  let popped = [];
  for (let i = 0; i < count; i++) {
    popped.unshift(this[this.length - 1]);
    this.length--;
  }
  return popped;
}

Array.prototype.shift = function (count = 1) {
  if (this.length < count) throw new Error('PROTOLIB ERR: Cannot shift ' + count + ' items from array with length of ' + this.length);
  if (count < 0) throw new Error('PROTOLIB ERR: Function "shift" cannot take negative number as parameter, was given ' + count);
  if (typeof count != 'number') throw new Error('PROTOLIB ERR: Function "shift" can only take parameter of type Number, was given "' + count + '"');

  this.reverse();
  if (count == 1) {
    let end = this[this.length - 1];
    this.length--;
    this.reverse
    return end;
  }
  let shifted = [];
  for (let i = 0; i < count; i++) {
    shifted.push(this[this.length - 1]);
    this.length--;
  }
  this.reverse();
  return shifted;
}