export class ProtoJsError extends Error {
  constructor(methodName, errString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProtoJsError)
    }

    this.name = name || 'ProtoJsError';
    this.methodName = methodName;
    this.messagePrefix = `(Method "${methodName}") `;
    this.message = this.messagePrefix + errString;
  }
}

export class ProtoJsTypeError extends ProtoJsError {
  constructor(methodName, argInd, expectedType, actualType, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects type "${expectedType}", but recieved type "${actualType}"`, ...params);

    this.name = 'ProtoJsTypeError';
  }
}

export class ProtoJsInstanceError extends ProtoJsError {
  constructor(methodName, argInd, expectedSuper, actualSuper, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects to be instance of "${expectedSuper}", but is an instance of the "${actualSuper}" super class`, ...params);

    this.name = 'ProtoJsInstanceError';
  }
}

export class ProtoJsSignError extends ProtoJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a positive number, but recieved ${actualValue}`, ...params);

    this.name = 'ProtoJsSignError';
  }
}

export class ProtoJsDecimalError extends ProtoJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a whole number, but recieved ${actualValue}`, ...params);

    this.name = 'ProtoJsDecimalError';
  }
}

export class ProtoJsRequiredArgumentError extends ProtoJsError {
  constructor(methodName, argInd, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) is required`, ...params);

    this.name = 'ProtoJsRequiredArgumentError';
  }
}