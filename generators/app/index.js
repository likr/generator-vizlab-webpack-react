'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.fs.copy(this.sourceRoot(), this.destinationRoot());
  },

  install: function () {
    this.npmInstall();
  }
});
