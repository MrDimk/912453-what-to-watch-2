import {User} from './user.type';

export type Film = {
  name: string,
  description: string,
  publicDate: Date,
  genres: string[],
  releaseYear: number,
  rating: number,
  preview: string,
  video: string,
  actors: string[],
  director: string,
  duration: number,
  commentsCount: number,
  user: User,
  poster: string,
  backgroundImage: string,
  backgroundColor: string
}
