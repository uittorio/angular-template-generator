toPascalCase = require("to-pascal-case");

class Stub {
  constructor(params) {
    this.name = params.name;
    this.prefix = params.prefix;
  }

  fileName() {
    return this.name + '.directive.stub.ts';
  }

  $Name() {
    return toPascalCase(this.name) + 'DirectiveStub';
  }

  $IName() {
    return 'I' + toPascalCase(this.name) + 'Directive';
  }

  $INameFile() {
    return './' + this.name + '.directive.interface';
  }

  $Selector() {
    return '[' + this.prefix + toPascalCase(this.name) + ']';
  }
}

module.exports = Stub;