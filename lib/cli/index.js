'use strict';

const CLI = require('./cli');
const UI = require('../ui');

module.exports = function(options) {
  let ui = new UI();

  let cli = new CLI({
    ui: ui
  });

  return cli.run(options);
};
