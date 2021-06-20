class PicnicJsError extends Error {
  constructor(methodName, errString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PicnicJsError)
    }

    this.name = name || 'PicnicJsError';
    this.methodName = methodName;
    this.messagePrefix = `(Method "${methodName}") `;
    this.message = this.messagePrefix + errString;
  }
}

class PicnicJsTypeError extends PicnicJsError {
  constructor(methodName, argInd, expectedType, actualType, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects type "${expectedType}", but recieved type "${actualType}"`, ...params);

    this.name = 'PicnicJsTypeError';
  }
}

class PicnicJsInstanceError extends PicnicJsError {
  constructor(methodName, argInd, expectedSuper, actualSuper, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects to be instance of "${expectedSuper}", but is an instance of the "${actualSuper}" super class`, ...params);

    this.name = 'PicnicJsInstanceError';
  }
}

class PicnicJsSignError extends PicnicJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a positive number, but recieved ${actualValue}`, ...params);

    this.name = 'PicnicJsSignError';
  }
}

class PicnicJsDecimalError extends PicnicJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a whole number, but recieved ${actualValue}`, ...params);

    this.name = 'PicnicJsDecimalError';
  }
}

class PicnicJsRequiredArgumentError extends PicnicJsError {
  constructor(methodName, argInd, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) is required`, ...params);

    this.name = 'PicnicJsRequiredArgumentError';
  }
}

module.exports = {
  PicnicJsError,
  PicnicJsTypeError,
  PicnicJsSignError,
  PicnicJsRequiredArgumentError,
  PicnicJsInstanceError,
  PicnicJsDecimalError
}