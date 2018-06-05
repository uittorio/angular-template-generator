const toPascalCase = require("to-pascal-case");

class Interface {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.interface.ts';
  }

  $IName() {
    return 'I' + toPascalCase(this.name);
  }
}

module.exports = Interface;