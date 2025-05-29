import { Logger } from "../../application/logger/logger";
import kleur from "kleur";

export class ConsoleLogger implements Logger {
  info(message: string, meta?: unknown): void {
    console.log(
      kleur.cyan().bold(`[INFO]`),
      kleur.white(message),
      meta ? kleur.gray(this.stringifyMeta(meta)) : ""
    );
  }

  warn(message: string, meta?: unknown): void {
    console.warn(
      kleur.yellow().bold(`[WARN]`),
      kleur.yellow(message),
      meta ? kleur.gray(this.stringifyMeta(meta)) : ""
    );
  }

  error(message: string, meta?: unknown): void {
    console.error(
      kleur.red().bold(`[ERROR]`),
      kleur.red(message),
      meta ? kleur.gray(this.stringifyMeta(meta)) : ""
    );
  }

  private stringifyMeta(meta: unknown): string {
    try {
      return typeof meta === "string" ? meta : JSON.stringify(meta, null, 2);
    } catch {
      return String(meta);
    }
  }
}
