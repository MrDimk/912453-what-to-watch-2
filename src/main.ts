import Application from './app/application.js';
import ConfigService from './common/config/config.service.js';
import LoggerService from './common/logger/logger.service.js';
import { Container } from 'inversify';
import { LoggerInterface } from './common/logger/logger.interface.js';
import { Component } from './types/component.types.js';
import { ConfigInterface } from './common/config/config.interface.js';
import 'reflect-metadata';
import DatabaseService from './common/database-client/database.service.js';
import {DatabaseInterface} from './common/database-client/database.interface.js';
import {UserServiceInterface} from './modules/user/user-service.interface.js';
import UserService from './modules/user/user.service.js';
import {types} from '@typegoose/typegoose';
import {UserEntity, UserModel} from './modules/user/user.entity.js';
import {FilmEntity, FilmModel} from './modules/film/film.entity.js';
import {FilmServiceInterface} from './modules/film/film-service.interface.js';
import FilmService from './modules/film/film.service.js';

const applicationContainer = new Container();
applicationContainer.bind<Application>(Component.Application).to(Application).inSingletonScope();
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService).inSingletonScope();
applicationContainer.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService).inSingletonScope();
applicationContainer.bind<DatabaseInterface>(Component.DatabaseInterface).to(DatabaseService).inSingletonScope();
applicationContainer.bind<UserServiceInterface>(Component.UserServiceInterface).to(UserService);
applicationContainer.bind<types.ModelType<UserEntity>>(Component.UserModel).toConstantValue(UserModel);

applicationContainer.bind<FilmServiceInterface>(Component.FilmServiceInterface).to(FilmService);
applicationContainer.bind<types.ModelType<FilmEntity>>(Component.FilmModel).toConstantValue(FilmModel);

const application = applicationContainer.get<Application>(Component.Application);

await application.init();
