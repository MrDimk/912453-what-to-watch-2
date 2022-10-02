export const generateRandomNumber = (min: number, max: number, digitsAfterPoint = 0): number =>
  Number((Math.random() * (max - min) + min).toFixed(digitsAfterPoint));

export const getRandomItems = <T>(items: T[]): T[] => items.filter(() => Math.round(Math.random()) === 1);

export const getRandomItem = <T>(items: T[]): T => items[generateRandomNumber(0, items.length - 1)];
