export class ProtoJsError extends Error {
  constructor(methodName, errString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProtoJsError)
    }

    this.name = 'ProtoJsError';
    this.methodName = methodName;
    this.messagePrefix = `ProtoJsError: (Method "${methodName}") `;
    this.message = this.messagePrefix + errString;
  }
}

export class ProtoJsTypeError extends ProtoJsError {
  constructor(methodName, argInd, expectedType, actualType, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects type "${expectedType}", but was given type "${actualType}"`, ...params);

    this.name = 'ProtoJsTypeError';
  }
}

export class ProtoJsSignError extends ProtoJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a positive number, but was given ${actualValue}`, ...params);

    this.name = 'ProtoJsSignError';
  }
}

export class ProtoJsDecimalError extends ProtoJsError {
  constructor(methodName, argInd, actualValue, ...params) {

    super(methodName, `Argument at index ${argInd} (arguments[${argInd}]) expects a whole number, but was given ${actualValue}`, ...params);

    this.name = 'ProtoJsDecimalError';
  }
}