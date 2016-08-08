'use strict';

const path = require('path');
const glob = require('glob').sync;

let commandsPath = '../commands/';

module.exports = class CLI {
  constructor(options) {
    this.ui = options.ui;
  }

  run(options) {
    var args = options.cliArgs.slice();
    var commandName = args.shift();
    var commandArgs = args;

    let CurrentCommand = findCommand(commandName);

    if (CurrentCommand) {
      let command = new CurrentCommand({
        ui: this.ui
      });

      return Promise.resolve(command.run());
    } else {

    }
  }
};

function findCommand(commandName) {
  let commands = findBuiltInCommands();
  let command;

  if (commandName) {
    command = commands
      .find(c => c.command === commandName);
  }

  return command || require('../commands/unknown');
}

function findBuiltInCommands() {
  let commands = glob('*.js', { cwd: __dirname + `/${commandsPath}` });

  return commands.map(c => require(`${commandsPath}${c}`));
}
