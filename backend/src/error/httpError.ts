import { BaseError } from "./baseError";

export class HttpError extends BaseError {
  constructor(
    public readonly statusCode: number,
    message: string,
    cause?: Error
  ) {
    super(message, cause);
    this.name = "HttpError";
  }
}