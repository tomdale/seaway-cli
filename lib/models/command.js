'use strict';

module.exports = class Command {
  constructor(options) {
    options = options || {};

    this.ui = options.ui;
  }
};
