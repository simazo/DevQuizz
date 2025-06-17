import { Logger, LogLevel } from "../../application/logger/logger";
import kleur from "kleur";

// ログレベルの表示名と色を定義
const LOG_LEVEL_CONFIG = {
  [LogLevel.TRACE]: { name: "TRACE", color: kleur.gray },
  [LogLevel.DEBUG]: { name: "DEBUG", color: kleur.blue },
  [LogLevel.INFO]: { name: "INFO", color: kleur.cyan },
  [LogLevel.WARN]: { name: "WARN", color: kleur.yellow },
  [LogLevel.ERROR]: { name: "ERROR", color: kleur.red },
};

export class ConsoleLogger implements Logger {
  private currentLogLevel: LogLevel;
  constructor(minLevel: LogLevel = LogLevel.INFO) {
    this.currentLogLevel = minLevel;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.currentLogLevel;
  }

  private formatLog(level: LogLevel, message: string, meta?: unknown): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const config = LOG_LEVEL_CONFIG[level];
    const timestamp = new Date().toISOString();
    const levelName = config.name;
    const levelColor = config.color;

    const formattedMeta = meta ? kleur.gray(this.stringifyMeta(meta)) : "";

    switch (level) {
      case LogLevel.ERROR:
        console.error(
          levelColor().bold(`[${timestamp}] [${levelName}]`),
          levelColor(message),
          formattedMeta
        );
        break;
      case LogLevel.WARN:
        console.warn(
          levelColor().bold(`[${timestamp}] [${levelName}]`),
          levelColor(message),
          formattedMeta
        );
        break;
      case LogLevel.INFO:
      case LogLevel.DEBUG:
      case LogLevel.TRACE:
      default:
        console.log(
          levelColor().bold(`[${timestamp}] [${levelName}]`),
          levelColor(message),
          formattedMeta
        );
        break;
    }
  }

  trace(message: string, meta?: unknown): void {
    this.formatLog(LogLevel.TRACE, message, meta);
  }

  debug(message: string, meta?: unknown): void {
    this.formatLog(LogLevel.DEBUG, message, meta);
  }

  info(message: string, meta?: unknown): void {
    this.formatLog(LogLevel.INFO, message, meta);
  }

  warn(message: string, meta?: unknown): void {
    this.formatLog(LogLevel.WARN, message, meta);
  }

  error(message: string, meta?: unknown): void {
    this.formatLog(LogLevel.ERROR, message, meta);
  }


  private stringifyMeta(meta: unknown): string {
    try {
      return typeof meta === "string" ? meta : JSON.stringify(meta, null, 2);
    } catch {
      return String(meta);
    }
  }
}
