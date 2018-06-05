const toPascalCase = require("to-pascal-case");

class Service {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.ts';
  }

  $Name() {
    return toPascalCase(this.name);
  }

  $IName() {
    return 'I' + toPascalCase(this.name);
  }

  $INameFile() {
    return './' + this.name + '.interface';
  }
}

module.exports = Service;