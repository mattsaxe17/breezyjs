Array.prototype.add = function(first = 0, last = this.length - 1) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += this[i];
    }
    return sum;
}

Array.prototype.pop = function(count = 1) {
    if (count == 1) {
        let last = this[this.length - 1];
        this.length--;
        return last;
    }
    let popped = [];
    for (let i = 0; i < count; i++) {
        popped.push(this[this.length - 1]);
        this.length -= 1;
    }
    return popped.reverse();
}