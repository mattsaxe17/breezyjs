const { BreezyJsError, BreezyJsTypeError, BreezyJsRequiredArgumentError, BreezyJsDecimalError, BreezyJsSignError, BreezyJsInstanceError } = require('./index');

const throwGenericError = (...args) => {
  throw new BreezyJsError(...args);
}

const genericErrorCheck = (condition, ...args) => {
  if (condition) throwGenericError(...args);
}

const requireArgs = (methodName, args) => {
  [...args].forEach((arg, ind) => {
    if (arg === undefined) {
      throw new BreezyJsRequiredArgumentError(methodName, ind);
    }
  });
}

const typeCheckArgs = (methodName, args, expectedTypes) => {
  [...args].forEach((arg, ind) => {
    if (expectedTypes[ind] === undefined) {
      return;
    }

    if (expectedTypes[ind] === 'array') {
      if (!Array.isArray(arg)) {
        throw new BreezyJsTypeError(methodName, ind, expectedTypes[ind], typeof arg);
      }
    } else {
      if (Array.isArray(expectedTypes[ind])) {
        if (!expectedTypes[ind].includes(typeof arg) && !(expectedTypes[ind].includes('array') && Array.isArray(arg))) {
          throw new BreezyJsTypeError(methodName, ind, expectedTypes[ind].join('" or "'), Array.isArray(arg) ? 'array' : typeof arg);
        }
      } else {
        if (typeof arg !== expectedTypes[ind]) {
          throw new BreezyJsTypeError(methodName, ind, expectedTypes[ind], Array.isArray(arg) ? 'array' : typeof arg);
        }
      }
    }
  })
}

const typeCheckSpreadArgs = (methodName, args, expectedType) => {
  typeCheckArgs(methodName, args, Array(args.length).fill(expectedType));
}

const requireArgInstanceOf = (methodName, args, expectedSupers) => {
  [...args].forEach((arg, ind) => {
    if (Array.isArray(expectedSupers[ind])) {
      let flag = false;

      expectedSupers[ind].forEach(expected => {
        if (arg instanceof expected) flag = true;
      });

      if (!flag) throw new BreezyJsInstanceError(methodName, ind, expectedSupers[ind].map(val => val.name).join('" or "'), arg.constructor.name);
    } else if (arg !== null && !(arg instanceof expectedSupers[ind])) {
      throw new BreezyJsInstanceError(methodName, ind, expectedSupers[ind].name, arg.constructor.name);
    }
  });
}

const requireWholeNumbers = (methodName, args, indices) => {
  [...args].forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg % 1 !== 0) {
        throw new BreezyJsDecimalError(methodName, ind, arg);
      }
    }
  });
}

const requirePositiveNumbers = (methodName, args, indices) => {
  [...args].forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg < 0) {
        throw new BreezyJsSignError(methodName, ind, arg);
      }
    }
  });
}

module.exports = {
  throwGenericError,
  genericErrorCheck,
  requireArgs,
  typeCheckArgs,
  typeCheckSpreadArgs,
  requireArgInstanceOf,
  requireWholeNumbers,
  requirePositiveNumbers
}