import {CliCommandInterface} from './cli-command.interface.js';
import {MockData} from '../types/mock.data.js';
import got from 'got';
import MovieGenerator from '../common/movie-generator/movie-generator.js';
import TSVFileWriter from '../common/file-writer/tsv-file-writer.js';

export class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters: string[]):Promise<void> {
    const [count, filepath, url] = parameters;
    const moviesCount = Number.parseInt(count, 10);

    try {
      this.initialData = await got.get(url).json();
    }
    catch {
      return console.log(`cant fetch data from ${url}`);
    }

    const movieStringGenerator = new MovieGenerator(this.initialData);
    const tsvFileWriter = new TSVFileWriter(filepath);

    for(let i = 0; i < moviesCount; i++) {
      await tsvFileWriter.write(movieStringGenerator.generate());
    }

    console.log(`File ${filepath} created!`);
  }
}
