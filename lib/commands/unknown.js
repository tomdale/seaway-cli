'use strict';

const Command = require('../models/command');

class UnknownCommand extends Command {
  run() {
    this.ui.writeLine('Unknown command');
  }
}

UnknownCommand.hidden = true;

module.exports = UnknownCommand;
