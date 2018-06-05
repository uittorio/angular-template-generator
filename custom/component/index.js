const toPascalCase = require("to-pascal-case");
const toKebabCase = require("just-kebab-case");

class Component {
  constructor(param) {
    this.name = param.name;
    this.prefix = param.prefix;
  }

  fileName() {
    return this.name + '.component.ts';
  }

  $Name() {
    return toPascalCase(this.name) + 'Component';
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

  $TemplateUrl() {
    return this.name + '.component.html';
  }
}

module.exports = Component;