import {LoggerInterface} from './logger.interface';
import chalk from 'chalk';

export default class ConsoleLoggerService implements LoggerInterface {
  public info(message: string, ...args: unknown[]): void {
    console.log(message,...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    console.log(chalk.yellow(message), ...args);
  }

  public error(message: string, ...args: unknown[]): void {
    console.log(chalk.red(message), ...args);
  }

  public debug(message: string, ...args: unknown[]): void {
    console.log(chalk.blue(message), ...args);
  }
}
