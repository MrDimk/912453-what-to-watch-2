import {MovieGeneratorInterface} from './movie-generator.interface.js';
import {MockData} from '../../types/mock.data.js';
import {generateRandomNumber, getRandomItem, getRandomItems} from '../../utils/random.js';
import dayjs from 'dayjs';

export default class MovieGenerator implements MovieGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate() {
    const title = getRandomItem(this.mockData.titles);
    const description = getRandomItem(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomNumber(1, 1000), 'day');
    const genres = getRandomItems(this.mockData.genres);
    const releaseYear = generateRandomNumber(1950, 2022);
    const rating = generateRandomNumber(1, 10);
    const preview = getRandomItem(this.mockData.previews);
    const video = getRandomItem(this.mockData.videos);
    const actors = getRandomItems(this.mockData.actors);
    const director = getRandomItem(this.mockData.directors);
    const duration = generateRandomNumber(60, 180);
    const commentsCount = generateRandomNumber(0, 20);
    const userName = getRandomItem(this.mockData.userNames);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);
    const poster = getRandomItem(this.mockData.posters);
    const bgImage = getRandomItem(this.mockData.bgImages);
    const color = getRandomItem(this.mockData.colors);

    return [
      title, description, postDate, genres, releaseYear, rating, preview, video, actors, director,
      duration, commentsCount, userName, email, avatar, poster, bgImage, color
    ].join('\t');
  }
}
