import { ProtoJsError, ProtoJsTypeError, ProtoJsRequiredArgumentError, ProtoJsDecimalError, ProtoJsSignError } from './index';

export const throwGenericError = (...args) => {
  throw new ProtoJsError(...args);
}

export const genericErrorCheck = (condition, ...args) => {
  if (condition) throwGenericError(...args);
}

export const requireArgs = (methodName, args) => {
  args.forEach((arg, ind) => {
    if (arg === undefined) {
      throw new ProtoJsRequiredArgumentError(methodName, ind);
    }
  });
}

export const typeCheckArgs = (methodName, args, expectedTypes) => {
  args.forEach((arg, ind) => {
    if (expectedTypes[ind] === 'array') {
      if (!Array.isArray(arg)) {
        throw new ProtoJsTypeError(methodName, ind, expectedTypes[ind], typeof arg);
      }
    } else {
      if (Array.isArray(expectedTypes[ind])) {
        if (!expectedTypes[ind].includes(typeof arg) && (expectedTypes[ind].includes('array') && !expectedTypes[ind].includes('array'))) {
          throw new ProtoJsTypeError(methodName, ind, expectedTypes[ind].join('" or "'), Array.isArray(arg) ? 'array' : typeof arg);
        }
      } else {
        if (typeof arg !== expectedTypes[ind]) {
          throw new ProtoJsTypeError(methodName, ind, expectedTypes[ind], Array.isArray(arg) ? 'array' : typeof arg);
        }
      }
    }
  })
}

export const requireWholeNumbers = (methodName, args, indices) => {
  args.forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg % 1 !== 0) {
        throw new ProtoJsDecimalError(methodName, ind, arg);
      }
    }
  });
}

export const requirePositiveNumbers = (methodName, args, indices) => {
  args.forEach((arg, ind) => {
    ind = parseInt(ind);
    if (indices.includes(ind)) {
      if (arg < 0) {
        throw new ProtoJsSignError(methodName, ind, arg);
      }
    }
  });
}