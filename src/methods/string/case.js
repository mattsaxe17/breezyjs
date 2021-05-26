String.prototype.camelCase = function () {
  let words = this.words();
  let ret = '';

  words.forEach((word, ind) => {
    word = word.toLowerCase();
    if (ind != 0) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    ret += word;
  });

  return ret;
}

String.prototype.capitalCamelCase = function () {
  let str = this.camelCase();
  return str[0].toUpperCase() + str.slice(1);
}

String.prototype.kebabCase = function () {
  return this.words().join('-').toLowerCase();
}

String.prototype.snakeCase = function () {
  return this.words().join('_').toLowerCase();
}

String.prototype.flatCase = function () {
  return this.words().join('').toLowerCase();
}

String.prototype.upperCase = function () {
  return this.words().join('').toUpperCase();
}

String.prototype.cases = function () {
  return {
    camel: this.camelCase(),
    capitalCamel: this.capitalCamelCase(),
    kebab: this.kebabCase(),
    snake: this.snakeCase(),
    flat: this.flatCase(),
    upper: this.upperCase(),
  }
}

String.prototype.words = function () {
  let str = this.slice();

  str = str.replace(/([a-z](?=[A-Z9-_]|\W))/g, '$1!@#$%^&*())(*&^%$#@!');
  str = str.replace(/([A-Z](?=[A-Z]))/g, '$&!@#$%^&*())(*&^%$#@!');
  str = str.replace(/[_\-\.\,\|\s]/g, '');

  return str.split('!@#$%^&*())(*&^%$#@!');
}