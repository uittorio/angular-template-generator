const toPascalCase = require("to-pascal-case");
const toKebabCase = require("just-kebab-case");

class Stub {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix;
  }

  fileName() {
    return this.name + '.component.stub.ts';
  }

  $Name() {
    return toPascalCase(this.name) + 'ComponentStub';
  }

  $IName() {
    return 'I' + toPascalCase(this.name) + 'Component';
  }

  $INameFile() {
    return './' + this.name + '.component.interface';
  }

  $Selector() {
    return toKebabCase(this.prefix + toPascalCase(this.name));
  }
}

module.exports = Stub;