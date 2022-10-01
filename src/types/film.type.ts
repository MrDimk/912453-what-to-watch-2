import {User} from './user.type';

export type Film = {
  title: string,
  description: string,
  postDate: Date,
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
