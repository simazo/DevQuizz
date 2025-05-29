import { BaseError } from "./baseError";

export class DomainError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = "DomainError";
  }
}