import { ConfigInterface } from '../common/config/config.interface.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { Component } from '../types/component.types.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface) { }

  public async init() {
    this.logger.info('Application initialization…');
    const port = this.config.get('PORT');
    const salt = this.config.get('SALT');
    const dbHost = this.config.get('DB_HOST');
    this.logger.info(port ? `Port is: ${port}` : 'Port is undefined!');
    this.logger.info(salt ? `Salt is: ${salt}` : 'Salt is undefined!');
    this.logger.info(dbHost ? `Port is: ${dbHost}` : 'DB_Host is undefined!');
  }
}
