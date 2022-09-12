import {FileReaderInterface} from './file-reader.interface.js';
import {readFileSync} from 'fs';
import {Film} from '../../types/film.type.js';

export default class TsvFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public name: string) { }

  public read():void {
    this.rawData = readFileSync(this.name, { encoding: 'utf-8' });
  }

  public toArray(): Film[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([name, description, publicDate, genres, releaseYear, rating, preview, video, actors, director, duration, commentsCount, userName,
        userEmail, userAvatar, userPassword, poster, backgroundImage, backgroundColor,]) => ({
        name,
        description,
        publicDate: new Date(publicDate),
        genres: genres.split(','),
        releaseYear: Number.parseInt(releaseYear, 10),
        rating: Number.parseInt(rating, 10),
        preview,
        video,
        actors: actors.split(','),
        director,
        duration: Number.parseInt(duration, 10),
        commentsCount: Number.parseInt(commentsCount, 10),
        user: {
          name: userName,
          email: userEmail,
          avatar: userAvatar,
          password: userPassword,
        },
        poster,
        backgroundImage,
        backgroundColor
      }));
  }
}
