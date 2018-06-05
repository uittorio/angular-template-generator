const toPascalCase = require("to-pascal-case");

class Interface {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.directive.interface.ts';
  }

  $IName() {
    return 'I' + toPascalCase(this.name) + 'Directive';
  }
}

module.exports = Interface;