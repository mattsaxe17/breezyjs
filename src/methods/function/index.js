import { throwGenericError, typeCheckArgs, typeCheckSpreadArgs, requirePositiveNumbers, requireWholeNumbers } from '../../error/helpers';

// Returns a promise that resolves to the fuction's return value after a given number of milliseconds
Function.prototype.wait = function (milliseconds, ...args) {
  typeCheckArgs('wait', arguments, ['number']);
  requirePositiveNumbers('wait', arguments, [0]);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this(...args));
    }, milliseconds);
  });
}

// Calls a function n times and puts return values into an array if any are not undefined
Function.prototype.repeat = function (times, ...args) {
  typeCheckArgs('repeat', arguments, ['number']);
  requirePositiveNumbers('repeat', arguments, [0]);
  requireWholeNumbers('repeat', arguments, [0]);

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
  typeCheckArgs('throttle', arguments, ['number']);
  requirePositiveNumbers('throttle', arguments, [0]);

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
  typeCheckArgs('limitInvocations', arguments, ['number']);
  requirePositiveNumbers('limitInvocations', arguments, [0]);
  requireWholeNumbers('limitInvocations', arguments, [0]);

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

// Returns a new function, which is a combination of the passed in functions in reverse order. Each one will take the previous function's return value as input.
Function.prototype.compose = function (...funcs) {
  typeCheckSpreadArgs('compose', funcs, 'function');

  funcs.unshift(this);
  return (arg) => {
    funcs.reverse().forEach(func => {
      arg = func(arg);
    });
    return arg;
  }
}

// Returns a new function, which is a combination of the passed in functions. Each one will take the previous function's return value as input.
Function.prototype.pipe = function (...funcs) {
  typeCheckSpreadArgs('pipe', funcs, 'function');

  funcs.unshift(this);
  return (arg) => {
    funcs.forEach(func => {
      arg = func(arg);
    });
    return arg;
  }
}

// Returns a new function, which is a combination of the passed in functions. Each one is invoked independantly with the original input.
Function.prototype.combine = function (...funcs) {
  typeCheckSpreadArgs('combine', funcs, 'function');

  funcs.unshift(this);
  return (arg) => {
    funcs.forEach(func => {
      func(arg);
    });
  }
}