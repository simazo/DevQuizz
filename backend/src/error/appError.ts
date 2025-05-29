import { BaseError } from "./baseError";

export class AppError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = "AppError";
  }
}