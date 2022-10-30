export default class CreateFilmDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public genres!: string[];
  public releaseYear!: number;
  public rating!: number;
  public preview!: string;
  public video!: string;
  public actors!: string[];
  public director!: string;
  public duration!: number;
  public commentsCount!: number;
  public userId!: string;
  public poster!: string;
  public backgroundImage!: string;
  public backgroundColor!: string;
}
