import { PicnicJsError, PicnicJsTypeError, PicnicJsRequiredArgumentError, PicnicJsDecimalError, PicnicJsSignError, PicnicJsInstanceError } from './index';

export const throwGenericError = (...args) => {
  throw new PicnicJsError(...args);
}

export const genericErrorCheck = (condition, ...args) => {
  if (condition) throwGenericError(...args);
}

export const requireArgs = (methodName, args) => {
  [...args].forEach((arg, ind) => {
    if (arg === undefined) {
      throw new PicnicJsRequiredArgumentError(methodName, ind);
    }
  });
}

export const typeCheckArgs = (methodName, args, expectedTypes) => {
  [...args].forEach((arg, ind) => {
    if (expectedTypes[ind] === undefined) {
      return;
    }

    if (expectedTypes[ind] === 'array') {
      if (!Array.isArray(arg)) {
        throw new PicnicJsTypeError(methodName, ind, expectedTypes[ind], typeof arg);
      }
    } else {
      if (Array.isArray(expectedTypes[ind])) {
        if (!expectedTypes[ind].includes(typeof arg) && !(expectedTypes[ind].includes('array') && Array.isArray(arg))) {
          throw new PicnicJsTypeError(methodName, ind, expectedTypes[ind].join('" or "'), Array.isArray(arg) ? 'array' : typeof arg);
        }
      } else {
        if (typeof arg !== expectedTypes[ind]) {
          throw new PicnicJsTypeError(methodName, ind, expectedTypes[ind], Array.isArray(arg) ? 'array' : typeof arg);
        }
      }
    }
  })
}

export const typeCheckSpreadArgs = (methodName, args, expectedType) => {
  typeCheckArgs(methodName, args, Array(args.length).fill(expectedType));
}

export const requireArgInstanceOf = (methodName, args, expectedSupers) => {
  [...args].forEach((arg, ind) => {
    if (Array.isArray(expectedSupers[ind])) {
      let flag = false;

      expectedSupers[ind].forEach(expected => {
        if (arg instanceof expected) flag = true;
      });

      if (!flag) throw new PicnicJsInstanceError(methodName, ind, expectedSupers[ind].map(val => val.name).join('" or "'), arg.constructor.name);
    } else if (arg !== null && !(arg instanceof expectedSupers[ind])) {
      throw new PicnicJsInstanceError(methodName, ind, expectedSupers[ind].name, arg.constructor.name);
    }
  });
}

export const requireWholeNumbers = (methodName, args, indices) => {
  [...args].forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg % 1 !== 0) {
        throw new PicnicJsDecimalError(methodName, ind, arg);
      }
    }
  });
}

export const requirePositiveNumbers = (methodName, args, indices) => {
  [...args].forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg < 0) {
        throw new PicnicJsSignError(methodName, ind, arg);
      }
    }
  });
}