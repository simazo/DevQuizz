export class BaseError extends Error {
  public cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.name = new.target.name;
    this.cause = cause;
  }
}