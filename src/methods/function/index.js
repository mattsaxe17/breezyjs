import { throwGenericError } from '../../error/helpers';

// Returns a promise that resolves to the fuction's return value after a given number of milliseconds
Function.prototype.wait = function (milliseconds, ...args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this(...args));
    }, milliseconds);
  });
}

// Calls a function n times and puts return values into an array if any are not undefined
Function.prototype.repeat = function (times, ...args) {
  let arr = [];
  let allUndefined = true;

  for (let i = 0; i < times; i++) {
    arr.push(this(...args));
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
      throwGenericError('throttle', `Function was debounced for ${milliseconds} milliseconds, please wait ${timeLeft / 1000} more seconds to invoke this function again.`);
    }
  }
}

// Returns a new function which is only allowed to be invoked n times
Function.prototype.limitInvocations = function (n) {
  let invocationCount = 0;

  return (...args) => {
    if (invocationCount < n) {
      invocationCount++;
      return this(...args);
    } else {
      throwGenericError('limitInvocations', 'The invocation limit has been reached on a function with limited invocations allowed');
    }
  }
}

Function.prototype.compose = function (...funcs) {
  funcs.unshift(this);

  return (arg) => {
    funcs.reverse().forEach(func => {
      arg = func(arg);
    });
    return arg;
  }
}

Function.prototype.pipe = function (...funcs) {
  funcs.unshift(this);

  return (arg) => {
    funcs.forEach(func => {
      arg = func(arg);
    });
    return arg;
  }
}

Function.prototype.combine = function (...funcs) {
  funcs.unshift(this);

  return (arg) => {
    funcs.forEach(func => {
      func(arg);
    });
  }
}