const toPascalCase = require("to-pascal-case"),
    toCamelCase = require("camelcase"),
    File = require('../utils/file'),
    templatesFolder = __dirname + "/templates/";

class Component {
  constructor(folder, name, prefix) {
    this.name = name;
    this.namePrefixed = prefix ? prefix + '-' + name : name;
    this.fileName = this.name + '.component';
    this.filePath = folder + '/' + this.fileName;
  }

  createFile() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "component.ts", (content) => {
        content = replaceComponentName(content, this.fileName);
        content = replaceSelector(content, this.namePrefixed);
        content = replaceTemplateUrl(content, this.fileName);
        content = replaceInterfaceImport(content, this.fileName + '.interface');
        File.create(this.filePath, "ts", content, resolve);
      });
    });
  }

  createSpec() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "spec.ts", (content) => {
        content = replaceComponentName(content, this.fileName);
        content = replaceComponentDebugElement(content, this.name);
        content = replaceSelector(content, this.namePrefixed);
        content = replaceComponentImport(content, this.fileName);
        File.create(this.filePath, "spec.ts", content, resolve);
      });
    });
  }

  createInterface() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "interface.ts", (content) => {
        content = replaceComponentName(content, this.fileName);

        File.create(this.filePath, "interface.ts", content, resolve);
      });
    })
  }

  createStub() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "stub.ts", (content) => {
        content = replaceComponentName(content, this.fileName);
        content = replaceSelector(content, this.namePrefixed);
        content = replaceComponentStubName(content, this.fileName + ".stub");
        content = replaceInterfaceImport(content, this.fileName + '.interface');

        File.create(this.filePath, "stub.ts", content, resolve);
      });
    })
  }

  createScss() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "scss.scss", (content) => {
        content = replaceClassName(content, this.namePrefixed);

        File.create(this.filePath, "scss", content, resolve);
      });
    })
  }

  createHtml() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "html.html", (content) => {
        content = replaceComponentName(content, toPascalCase(this.namePrefixed));

        File.create(this.filePath, "html", content, resolve);
      });
    })
  }
}

function replaceComponentName(data, nameComponent) {
  return data.replace(/NameOfComponent/g, toPascalCase(nameComponent));
}

function replaceComponentStubName(data, nameComponent) {
  return data.replace(/NameOfComponentStub/g, toPascalCase(nameComponent));
}

function replaceSelector(data, namePrefixed) {
  return data.replace(/NameOfSelector/g, namePrefixed);
}

function replaceClassName(data, namePrefixed) {
  return data.replace(/NameOfComponent/g, toPascalCase(namePrefixed));
}

function replaceTemplateUrl(data, nameFile) {
  return data.replace(/NameOfTemplateUrl/g, nameFile + ".html");
}

function replaceComponentImport(data, name) {
  return data.replace(/NameOfImportComponent/g, name);
}

function replaceComponentDebugElement(data, name) {
  return data.replace(/NameOfDebugElement/g, toCamelCase(name));
}

function replaceInterfaceImport(data, name) {
  return data.replace(/NameOfImportInterface/g, name);
}

module.exports = Component;