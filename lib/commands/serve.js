"use strict";

const Command = require('../models/command');

class ServerCommand extends Command {
  run() {
    this.ui.writeLine('Starting server');
  }
}

ServerCommand.command = 'serve';
ServerCommand.description = 'Builds and serves your app, rebuilding on file changes.';
ServerCommand.aliases = ['server', 's'];

let defaultPort = process.env.PORT || 4300;

ServerCommand.availableOptions = [
  { name: 'port',                 type: Number,  default: defaultPort,   aliases: ['p'] },
  { name: 'host',                 type: String,                          aliases: ['H'],     description: 'Listens on all interfaces by default' },
  { name: 'ssl-key',              type: String,  default: 'ssl/server.key' },
  { name: 'ssl-cert',             type: String,  default: 'ssl/server.crt' }
];

module.exports = ServerCommand;
