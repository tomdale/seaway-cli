'use strict';

var Blueprint = require('../models/blueprint');

class InitCommand {
  run() {
    var blueprint = new Blueprint({
      name: 'app'
    });

    blueprint.install();
  }
}

InitCommand.command = 'init';

module.exports = InitCommand;
