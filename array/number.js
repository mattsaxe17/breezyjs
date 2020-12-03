Array.prototype.mergeSort = function() {
    if (this.length <= 1) {
        return this;
    }
    let middle = Math.floor(this.length / 2);
    let left = this.slice(0, middle);
    let right = this.slice(middle);
    let merge = function(arr1, arr2) {
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
    return merge(left.mergeSort(), right.mergeSort());
}

Array.prototype.sum = function(first = 0, last = this.length - 1) {
    let sum = 0;
    for (let i = first; i <= last; i++) {
        sum += this[i];
    }
    return sum;
}

Array.prototype.mean = function() {
    return this.sum() / this.length;
}

Array.prototype.median = function() {
    var sorted = this.mergeSort();
    if (sorted.length % 2 == 1) {
        return sorted[Math.floor(sorted.length / 2)];
    } else {
        let middle = Math.floor(sorted.length / 2);
        return [sorted[middle - 1], sorted[middle]].mean();
    }
}

Array.prototype.mode = function() {
    let counter = {};
    let mode = [];
    let max = 0;
    this.forEach(num => {
        if (counter[num]) {
            counter[num] = counter[num] + 1;
        } else {
            counter[num] = 1;
        }
    });
    for (var num in counter) {
        if(counter[num] > max) {
            mode = [];
            mode.push(parseInt(num));
            max = counter[num];
        } else if (counter[num] == max) {
            mode.push(parseInt(num));
        }
    }
    if (mode.length == 1) return mode[0];
    return mode;
}

Array.prototype.range = function() {
    let sorted = this.mergeSort();
    return sorted[sorted.length - 1] - sorted[0];
}

Array.prototype.interquartileRange = function() {
    let sorted = this.mergeSort();
    let left, right = [];
    let middle = Math.floor(sorted.length / 2);
    left = sorted.slice(0, middle);
    if (sorted.length % 2 == 1) middle++;
    right = sorted.slice(middle);
    return right.median() - left.median();
}

//Aliases
Array.prototype.avg = Array.prototype.mean;
Array.prototype.midspread = Array.prototype.interquartileRange;

module.exports = Array.prototype;

