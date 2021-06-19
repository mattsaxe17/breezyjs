export class BreezeJsError extends Error {
  constructor(methodName, errString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BreezeJsError)
    }

    this.name = name || 'BreezeJsError';
    this.methodName = methodName;
    this.messagePrefix = `(Method "${methodName}") `;
    this.message = this.messagePrefix + errString;
  }
}

export class BreezeJsTypeError extends BreezeJsError {
  constructor(methodName, argInd, expectedType, actualType, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects type "${expectedType}", but recieved type "${actualType}"`, ...params);

    this.name = 'BreezeJsTypeError';
  }
}

export class BreezeJsInstanceError extends BreezeJsError {
  constructor(methodName, argInd, expectedSuper, actualSuper, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects to be instance of "${expectedSuper}", but is an instance of the "${actualSuper}" super class`, ...params);

    this.name = 'BreezeJsInstanceError';
  }
}

export class BreezeJsSignError extends BreezeJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a positive number, but recieved ${actualValue}`, ...params);

    this.name = 'BreezeJsSignError';
  }
}

export class BreezeJsDecimalError extends BreezeJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a whole number, but recieved ${actualValue}`, ...params);

    this.name = 'BreezeJsDecimalError';
  }
}

export class BreezeJsRequiredArgumentError extends BreezeJsError {
  constructor(methodName, argInd, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) is required`, ...params);

    this.name = 'BreezeJsRequiredArgumentError';
  }
}