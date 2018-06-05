const toPascalCase = require("to-pascal-case");

class Scss {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix;
  }

  fileName() {
    return this.name + '.component.scss';
  }

  $Name() {
    return toPascalCase(this.prefix) + toPascalCase(this.name);
  }
}

module.exports = Scss;