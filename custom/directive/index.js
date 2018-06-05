const toPascalCase = require("to-pascal-case");

class Directive {
  constructor(params) {
    this.name = params.name;
    this.prefix = params.prefix;
  }

  fileName() {
    return this.name + '.directive.ts';
  }

  $Name() {
    return toPascalCase(this.name) + 'Directive';
  }

  $IName() {
    return 'I' + toPascalCase(this.name) + 'Directive';
  }

  $INameFile() {
    return './' + this.name + '.directive.interface';
  }

  $Selector() {
    return '[' + this.prefix + toPascalCase(this.name) + ']';
  }
}

module.exports = Directive;