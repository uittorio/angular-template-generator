const toPascalCase = require("to-pascal-case"),
  File = require('../utils/file'),
  templatesFolder = __dirname + "/templates/";

function Component(folder, name) {
  this.name = name;
  this.fileName = this.name + '.component';
  this.filePath = folder + '/' + this.fileName;
}

Component.prototype.createFile = function() {
  File.read(templatesFolder + "component.ts", (content) => {
    content = replaceComponentName(content, this.fileName);
    content = replaceSelector(content, this.name);
    content = replaceTemplateUrl(content, this.fileName);

    File.create(this.filePath, "ts", content);
  });
};

Component.prototype.createSpec = function() {
  File.read(templatesFolder + "spec.ts", (content) => {
    content = replaceComponentName(content, this.fileName);
    File.create(this.filePath, "spec.ts", content);
  });
};

Component.prototype.createInterface = function() {
  File.read(templatesFolder + "interface.ts", (content) => {
    content = replaceComponentName(content, this.fileName);

    File.create(this.filePath, "interface.ts", content);
  });
};

Component.prototype.createStub = function() {
  File.read(templatesFolder + "stub.ts", (content) => {
    content = replaceComponentName(content, this.fileName);
    content = replaceSelector(content, this.name);
    content = replaceComponentStubName(content, this.fileName + ".stub");

    File.create(this.filePath, "stub.ts", content);
  });
};

Component.prototype.createScss = function() {
  File.read(templatesFolder + "scss.scss", (content) => {
    content = replaceComponentName(content, this.name);

    File.create(this.filePath, "scss", content);
  });
};

Component.prototype.createHtml = function() {
  File.read(templatesFolder + "html.html", (content) => {
    content = replaceComponentName(content, this.name);

    File.create(this.filePath, "html", content);
  });
};

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

module.exports = Component;