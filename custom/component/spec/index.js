toPascalCase = require("to-pascal-case");

class Spec {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix ? param.prefix + '-' : '';
  }

  fileName() {
    return this.name + '.component.spec.ts';
  }

  $Component() {
    return toPascalCase(this.name) + 'Component';
  }

  $ComponentFile() {
    return './' + this.name + '.component';
  }

  $Selector() {
    return this.prefix + this.name;
  }
}

module.exports = Spec;