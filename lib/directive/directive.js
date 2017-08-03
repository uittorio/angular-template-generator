const toPascalCase = require("to-pascal-case"),
  toCamelCase = require("camelcase"),
  File = require('../utils/file'),
  templatesFolder = __dirname + "/templates/";

class Directive {
  constructor(folder, name) {
    this.name = name;
    this.fileName = this.name + '.directive';
    this.filePath = folder + '/' + this.fileName;
  }

  createFile() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "directive.ts", (content) => {
        content = replaceDirectiveName(content, this.fileName);
        content = replaceSelector(content, this.name);
        content = replaceInterfaceImport(content, this.fileName + '.interface');
        File.create(this.filePath, "ts", content, resolve);
      });
    });
  }

  createInterface() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "interface.ts", (content) => {
        content = replaceDirectiveName(content, this.fileName);

        File.create(this.filePath, "interface.ts", content, resolve);
      });
    })
  }

  createStub() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "stub.ts", (content) => {
        content = replaceDirectiveName(content, this.fileName);
        content = replaceSelectorStub(content, this.name);
        content = replaceDirectiveStubName(content, this.fileName + ".stub");
        content = replaceInterfaceImport(content, this.fileName + '.interface');

        File.create(this.filePath, "stub.ts", content, resolve);
      });
    })
  }
}

function replaceDirectiveName(data, name) {
  return data.replace(/NameOfDirective/g, toPascalCase(name));
}

function replaceDirectiveStubName(data, name) {
  return data.replace(/NameOfDirectiveStub/g, toPascalCase(name));
}

function replaceSelector(data, name) {
  return data.replace(/NameOfSelector/g, toCamelCase(name));
}

function replaceSelectorStub(data, name) {
  return data.replace(/NameOfSelector/g, name);
}

function replaceInterfaceImport(data, name) {
  return data.replace(/NameOfImportInterface/g, "./" + name);
}

module.exports = Directive;