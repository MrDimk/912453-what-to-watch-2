import { FileWriterInterface } from './file-writer.interface';
import { createWriteStream, WriteStream } from 'fs';

export default class TSVFileWriter implements FileWriterInterface {
  private stream: WriteStream;

  constructor(public readonly fileName: string) {
    this.stream = createWriteStream(this.fileName, {
      flags: 'w',
      encoding: 'utf8',
      highWaterMark: 2 ** 16,
      autoClose: true,
    });
  }

  public async write(row: string): Promise<void> {
    if (!this.stream.write(`${row}\n`)) {
      return new Promise((resolve) => {
        this.stream.once('drain', resolve);
      });
    }
    return Promise.resolve();
  }
}
