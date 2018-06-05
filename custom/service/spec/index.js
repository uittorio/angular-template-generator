toPascalCase = require("to-pascal-case");

class Spec {
  constructor(param) {
    this.name = param.name;
  }

  fileName() {
    return this.name + '.spec.ts';
  }

  $Name() {
    return toPascalCase(this.name);
  }

  $NameFile() {
    return './' + this.name;
  }
}

module.exports = Spec;