const toPascalCase = require("to-pascal-case"),
  File = require('../utils/file'),
  templatesFolder = __dirname + "/templates/";

class Component {
  constructor(folder, name) {
    this.name = name;
    this.fileName = this.name + '.component';
    this.filePath = folder + '/' + this.fileName;
  }

  createFile() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "component.ts", (content) => {
        content = replaceComponentName(content, this.fileName);
        content = replaceSelector(content, this.name);
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
        content = replaceSelector(content, this.name);
        content = replaceSelector(content, this.name);
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
        content = replaceSelector(content, this.name);
        content = replaceComponentStubName(content, this.fileName + ".stub");
        content = replaceInterfaceImport(content, this.fileName + '.interface');

        File.create(this.filePath, "stub.ts", content, resolve);
      });
    })
  }

  createScss() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "scss.scss", (content) => {
        content = replaceComponentName(content, this.name);

        File.create(this.filePath, "scss", content, resolve);
      });
    })
  }

  createHtml() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "html.html", (content) => {
        content = replaceComponentName(content, this.name);

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

function replaceSelector(data, nameComponent) {
  return data.replace(/NameOfSelector/g, nameComponent);
}

function replaceTemplateUrl(data, nameFile) {
  return data.replace(/NameOfTemplateUrl/g, "./" + nameFile + ".html");
}

function replaceComponentImport(data, name) {
  return data.replace(/NameOfImportComponent/g, "./" + name);
}

function replaceInterfaceImport(data, name) {
  return data.replace(/NameOfImportInterface/g, "./" + name);
}

module.exports = Component;