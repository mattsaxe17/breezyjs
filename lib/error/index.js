class BreezyJsError extends Error {
  constructor(methodName, errString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BreezyJsError)
    }

    this.name = name || 'BreezyJsError';
    this.methodName = methodName;
    this.messagePrefix = `(Method "${methodName}") `;
    this.message = this.messagePrefix + errString;
  }
}

class BreezyJsTypeError extends BreezyJsError {
  constructor(methodName, argInd, expectedType, actualType, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects type "${expectedType}", but recieved type "${actualType}"`, ...params);

    this.name = 'BreezyJsTypeError';
  }
}

class BreezyJsInstanceError extends BreezyJsError {
  constructor(methodName, argInd, expectedSuper, actualSuper, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects to be instance of "${expectedSuper}", but is an instance of the "${actualSuper}" super class`, ...params);

    this.name = 'BreezyJsInstanceError';
  }
}

class BreezyJsSignError extends BreezyJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a positive number, but recieved ${actualValue}`, ...params);

    this.name = 'BreezyJsSignError';
  }
}

class BreezyJsDecimalError extends BreezyJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a whole number, but recieved ${actualValue}`, ...params);

    this.name = 'BreezyJsDecimalError';
  }
}

class BreezyJsRequiredArgumentError extends BreezyJsError {
  constructor(methodName, argInd, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) is required`, ...params);

    this.name = 'BreezyJsRequiredArgumentError';
  }
}

module.exports = {
  BreezyJsError,
  BreezyJsTypeError,
  BreezyJsSignError,
  BreezyJsRequiredArgumentError,
  BreezyJsInstanceError,
  BreezyJsDecimalError
}