toPascalCase = require("to-pascal-case");

class Stub {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.stub.ts';
  }

  $Name() {
    return toPascalCase(this.name) + 'Stub';
  }

  $IName() {
    return 'I' + toPascalCase(this.name);
  }

  $INameFile() {
    return './' + this.name + '.interface';
  }
}

module.exports = Stub;