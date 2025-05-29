import { BaseError } from "./baseError";

export function wrapError<T extends BaseError>(
  err: unknown,
  ErrorClass: new (message: string, cause?: Error) => T,
  message: string
): T {
  if (err instanceof ErrorClass) {
    return err;
  }
  const cause = err instanceof Error ? err : undefined;
  return new ErrorClass(message, cause);
}