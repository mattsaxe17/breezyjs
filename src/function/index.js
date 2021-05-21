// Returns a promise that resolves to the fuction's return value after a given number of milliseconds
Function.prototype.wait = function (milliseconds, ...arguments) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this(...arguments));
    }, milliseconds);
  });
}

// Calls a function n times and puts return values into an array if any are not undefined
Function.prototype.repeat = function (times, ...arguments) {
  let arr = [];
  let allUndefined = true;

  for (let i = 0; i < times; i++) {
    arr.push(this(...arguments));
  }

  arr.forEach(item => {
    if (item !== undefined) {
      allUndefined = false;
    }
  })
  return allUndefined ? undefined : arr;
}

// Returns a new, throttled function
Function.prototype.throttle = function (milliseconds, ...args) {
  let allowedToRun = true;
  let lastRunAt;

  return (...args) => {
    if (allowedToRun) {
      allowedToRun = false;

      setTimeout(() => {
        allowedToRun = true;
      }, milliseconds);

      lastRunAt = Date.now();
      return this(...args);
    } else {
      let timeLeft = milliseconds - (Date.now() - lastRunAt)
      return `Function was debounced for ${milliseconds} milliseconds, please wait for ${timeLeft} more milliseconds to call this function again.`
    }
  }
}

// TODO: Implement
Function.prototype.limitInvocations = function (n) {

}