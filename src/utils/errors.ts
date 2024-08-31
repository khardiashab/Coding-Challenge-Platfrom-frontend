// Create a custom error class
export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
// create InvalidEmailError with CustomError class
export class InvalidEmailError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidEmailError";
  }
}

//   Create  InvalidDisplayNameError class with custom error class
export class InvalidDisplayNameError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidDisplayNameError";
  }
}
//   AlreadyInUseError with custom error classs

export class AlreadyInUseError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = "AlreadyInUseError";
  }
}
//   ConflictError with custom error class
export class ConflictError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = "CoflictError.";
  }
}
//   InternalServerError with custom error class
export class InternalServerError extends CustomError {
  constructor(message: string) {
    super(message);
    this.name = "InternalServerError";
  }
}
