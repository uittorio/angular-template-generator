toPascalCase = require("to-pascal-case");

class Spec {
  constructor(params) {
    this.name = params.name;
    this.prefix = params.prefix;
  }

  fileName() {
    return this.name + '.directive.spec.ts';
  }

  $Directive() {
    return toPascalCase(this.name) + 'Directive';
  }

  $DirectiveFile() {
    return './' + this.name + '.directive';
  }

  $Selector() {
    return '[' + this.prefix + toPascalCase(this.name) + ']';
  }
}

module.exports = Spec;