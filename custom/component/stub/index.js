toPascalCase = require("to-pascal-case");

class Stub {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix ? param.prefix + '-' : '';
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
    return this.prefix + this.name;
  }
}

module.exports = Stub;