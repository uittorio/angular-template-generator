const toPascalCase = require("to-pascal-case");

class Interface {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.component.interface.ts';
  }

  $IName() {
    return 'I' + toPascalCase(this.name) + 'Component';
  }
}

module.exports = Interface;