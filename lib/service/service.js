const toPascalCase = require("to-pascal-case"),
  File = require('../utils/file'),
  templatesFolder = __dirname + "/templates/";

class Service {
  constructor(folder, name) {
    this.name = name;
    this.fileName = this.name;
    this.filePath = folder + '/' + this.fileName;
  }

  createFile() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "service.ts", (content) => {
        content = replaceServiceName(content, this.name);
        content = replaceInterfaceImport(content, this.fileName + '.interface');
        File.create(this.filePath, "ts", content, resolve);
      });
    });
  }

  createSpec() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "spec.ts", (content) => {
        content = replaceServiceName(content, this.name);
        content = replaceServiceImport(content, this.fileName);
        File.create(this.filePath, "spec.ts", content, resolve);
      });
    });
  }

  createStub() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "stub.ts", (content) => {
        content = replaceServiceName(content, this.fileName);
        content = replaceInterfaceImport(content, this.fileName + '.interface');

        File.create(this.filePath, "stub.ts", content, resolve);
      });
    })
  }

  createInterface() {
    return new Promise((resolve) => {
      File.read(templatesFolder + "interface.ts", (content) => {
        content = replaceServiceName(content, this.fileName);

        File.create(this.filePath, "interface.ts", content, resolve);
      });
    })
  }
}

function replaceServiceName(data, name) {
  return data.replace(/NameOfService/g, toPascalCase(name));
}

function replaceServiceImport(data, name) {
  return data.replace(/NameOfImportService/g, name);
}

function replaceInterfaceImport(data, name) {
  return data.replace(/NameOfImportInterface/g, name);
}
module.exports = Service;