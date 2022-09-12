import {CliCommandInterface} from '../cli-command/cli-command.interface.js';

type ParcedCommand = {
  [key:string]: string[],
}

export default class CliApplication  {
  private commands: {[commandName: string]: CliCommandInterface} = {};
  private defaultCommand = '--help';

  public registerCommands(commandsList: CliCommandInterface[]): void {
    commandsList.reduce((acc, command)=>{
      const cliCommand = command;
      acc[cliCommand.name] = cliCommand;
      return acc;
    }, this.commands);
  }

  private parseCommand(cliArguments: string[]): ParcedCommand {
    const parsedCommand: ParcedCommand = {};
    let command = '';

    return cliArguments.reduce((acc, item) =>{
      if(item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if(command && item) {
        acc[command].push(item);
      }
      return acc;
    }, parsedCommand);
  }

  public getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  public processComand(argv: string[]): void {
    const parsedCommand = this.parseCommand(argv);
    const [commandName] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parsedCommand[commandName] ?? [];
    command.execute(...commandArguments);
  }
}
