import {User} from './user.type';

export type Comment = {
  text: string,
  rating: number,
  publicDate: Date,
  author: User
}
