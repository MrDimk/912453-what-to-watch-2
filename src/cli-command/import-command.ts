import {CliCommandInterface} from './cli-command.interface.js';
import TsvFileReader from '../common/file-reader/tsv-file-reader.js';
import {createMovie} from '../utils/common.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  private onLine(line: string) {
    const movie = createMovie(line);
    console.log(movie);
  }

  private onComplete(count: number) {
    console.log(`${count} all data imported.`);
  }

  public async execute(filename: string): Promise<void> {
    const fileReader = new TsvFileReader(filename.trim());
    fileReader.on('line', this.onLine);
    fileReader.on('end', this.onComplete);

    try {
      await fileReader.read();
    }
    catch (err) {
      console.log(`Can't read file - ${err}`);
    }
  }
}
