import { BaseError } from "./baseError";

export class InfraError extends BaseError {
  constructor(message: string) {
    super(message);
    this.name = "InfraError";
  }
}