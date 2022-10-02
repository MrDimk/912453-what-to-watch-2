import {Film} from '../types/film.type';

export const createMovie = (row: string): Film =>{
  const tokens = row.replace('\n', ' ').split('\t');
  const [title, description, postDate, genres, releaseYear, rating, preview, video, actors, director, duration, commentsCount, userName,
    userEmail, userAvatar, userPassword, poster, backgroundImage, backgroundColor,] = tokens;
  return {
    title,
    description,
    postDate: new Date(postDate),
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
  } as Film;
};
