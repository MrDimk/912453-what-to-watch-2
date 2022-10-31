// import {Film} from '../../types/film.type';
import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import {UserEntity} from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface FilmEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'films'
  }
})

export class FilmEntity extends defaultClasses.TimeStamps {
  @prop({
    minlength: 2,
    maxlength: 100,
    required: true,
  })
  public title!: string;

  @prop({
    minlength: 20,
    maxlength: 1024,
    required: true,
  })
  public description!: string;

  @prop({
    required: true,
    default: Date.now()
  })
  public postDate!: Date;


  @prop({required: true})
  public genres!: string[];

  @prop({required: true})
  public releaseYear!: number;

  @prop({
    required: true,
    default: 0
  })
  public rating!: number;

  @prop({required: true})
  public preview!: string;

  @prop({required: true})
  public video!: string;

  @prop({required: true})
  public actors!: string[];

  @prop({
    minlength: 2,
    maxlength: 50,
    required: true
  })
  public director!: string;

  @prop({required: true})
  public duration!: number;

  @prop()
  public commentsCount!: number;

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({required: true})
  public poster!: string;

  @prop({required: true})
  public backgroundImage!: string;

  @prop({required: true})
  public backgroundColor!: string;
}

export const FilmModel = getModelForClass(FilmEntity);
