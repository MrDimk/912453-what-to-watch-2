import {CliCommandInterface} from './cli-command.interface.js';
import chalk from 'chalk';

const text = chalk.white;
const title = chalk.underline;
const command = chalk.green;
const args = chalk.red;

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute() {
    console.log(text(`Программа для подготовки данных для REST API сервера.
        ${title('Пример:')}
            main.js ${command('--<command>')} ${args('[--arguments]')}
        ${title('Команды:')}
            ${command('--version')}:                        #  Выводит номер версии приложения
            ${command('--help')}:                           #  Печатает этот текст
            ${command('--import')} ${args('<filepath>')}:              #  Импортирует данные из TSV
            ${command('--generate')} ${args('<n> <filepath> <url>')}:  #  Создаёт файл в формате tsv с тестовыми данными. Параметр n задаёт
                                              #  количество генерируемых карточек для фильмов. Параметр filepath указывает
                                              #  путь для сохранения файла с описанием карточек фильмов. Параметр
                                              #  <url> задаёт адрес сервера, с которого необходимо взять данные.`));
  }
}
