const toPascalCase = require("to-pascal-case");
const toKebabCase = require("just-kebab-case");
const toCamelCase = require("camelcase");

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

  $ComponentDebugElement() {
    return toCamelCase(this.name) + 'Component';
  }

  $ComponentFile() {
    return './' + this.name + '.component';
  }

  $Selector() {
    return toKebabCase(this.prefix + toPascalCase(this.name));
  }
}

module.exports = Spec;