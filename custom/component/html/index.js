const toPascalCase = require("to-pascal-case");

class Html {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix;
  }

  fileName() {
    return this.name + '.component.html';
  }

  $Name() {
    return toPascalCase(this.prefix) + toPascalCase(this.name);
  }
}

module.exports = Html;