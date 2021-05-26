const within = function (arr) {
  let val = this.valueOf();

  return arr.reduce((acc, cur) => {
    if (typeof val === 'object') {
      if (cur.isEqual(this)) acc = true;
    } else {
      if (cur === val) acc = true;
    }
    return acc;
  }, false);
}

Boolean.prototype.within = within;
Number.prototype.within = within;
String.prototype.within = within;
Object.prototype.within = within;
Function.prototype.within = within;