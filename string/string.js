String.prototype.caps = function() {
    if (arguments[0] == 'all') return this.toUpperCase();
    let arr = this.split(' ');
    arr.forEach((word, ind) => {
        arr[ind] = word[0].toUpperCase() + word.slice(1);
    });
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i != arr.length - 1) {
            str += ' ';
        }
    }
    return str;
}

String.prototype.uncaps = function() {
    let arr = this.split(' ');
    arr.forEach((word, ind) => {
        arr[ind] = word[0] + word.slice(1).toLowerCase();
    });
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i != arr.length - 1) {
            str += ' ';
        }
    }
    return str;
}

String.prototype.formatTitle = function() {
    return this.caps().uncaps();
}

String.prototype.spongegar = function() {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if(Math.random() > .5) {
            str += this[i].toUpperCase();
        } else {
            str += this[i].toLowerCase();
        }
    }
    return str;
}

String.prototype.reverse = function() {
    let str = '';
    for (let i = this.length - 1; i >= 0; i--) {
        str += this[i];
    }
    return str;
}

module.exports = Array.prototype;