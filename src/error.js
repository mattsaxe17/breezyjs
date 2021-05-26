export default class ProtoJsError extends Error {
  constructor(methodName, errorString, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProtoJsError)
    }

    this.name = 'ProtoJsError';
    this.methodName = methodName;
    this.message = `ProtoJsError: (Method "${methodName}") ${errorString}`
  }
}