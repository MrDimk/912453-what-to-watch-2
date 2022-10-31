import { ConfigInterface } from '../common/config/config.interface.js';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { Component } from '../types/component.types.js';
import {DatabaseInterface} from '../common/database-client/database.interface.js';
import {getURI} from '../utils/db.js';
import {UserModel} from '../modules/user/user.entity.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface,
    @inject(Component.DatabaseInterface) private databaseClient: DatabaseInterface) { }

  public async init() {
    this.logger.info('Application initialization…');
    const port = this.config.get('PORT');
    const salt = this.config.get('SALT');
    const dbHost = this.config.get('DB_HOST');
    this.logger.info(port ? `Port is: ${port}` : 'Port is undefined!');
    this.logger.info(salt ? `Salt is: ${salt}` : 'Salt is undefined!');
    this.logger.info(dbHost ? `Port is: ${dbHost}` : 'DB_Host is undefined!');

    const uri = getURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME')
    );

    await this.databaseClient.connect(uri);

    const user = await UserModel.create({
      name: 'Harry Potter 4',
      email: 'iamharry5@hockguarts.uk',
      avatar: './img/harry-ava5.png',
      password: 'Firebolt-2'
    });

    const error = user.validateSync();
    console.log(error);

    this.logger.info('user created');
    this.logger.info(user.email);
  }
}
