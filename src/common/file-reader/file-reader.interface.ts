export interface FileReaderInterface {
  readonly name: string;
  read(): void;
}
