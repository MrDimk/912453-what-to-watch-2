import {CliCommandInterface} from './cli-command.interface';
import TsvFileReader from '../common/file-reader/tsv-file-reader.js';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  public execute(filename: string): void {
    const fileReader = new TsvFileReader(filename);

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch(err) {
      if (!(err instanceof Error)) {
        throw err;
      }
      console.log('не прокатило', err.message);
    }
  }
}