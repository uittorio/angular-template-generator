var fs = require('fs'),
  toPascalCase = require("to-pascal-case"),
  File = require('../utils/file'),
  templatesFolder = __dirname + "/templates/";

function Component(dir, nameComponent) {
  this.dir = dir;
  this.nameComponent = nameComponent;
}

Component.prototype.createFile = function() {
  var nameFile = this.nameComponent + '.component',
    that = this;

  File.read(templatesFolder + "component.ts", function(data) {
    data = replaceComponentName(data, nameFile);
    data = replaceSelector(data, that.nameComponent);
    data = replaceTemplateUrl(data, nameFile);

    File.create(that.dir, nameFile, "ts", data);
  });
};

Component.prototype.createSpec = function() {
  var nameFile = this.nameComponent + ".component.spec",
    that = this;

  File.read(templatesFolder + "spec.ts", function(data) {
    data = replaceComponentName(data, that.nameComponent + ".component");

    File.create(that.dir, nameFile, "ts", data);
  });
};

Component.prototype.createInterface = function() {
  var nameFile = this.nameComponent + ".component.interface",
    that = this;

  File.read(templatesFolder + "interface.ts", function(data) {
    data = replaceComponentName(data, that.nameComponent + ".component");

    File.create(that.dir, nameFile, "ts", data);
  });
};

Component.prototype.createStub = function() {
  var nameFile = this.nameComponent + '.component.stub',
    that = this;

  File.read(templatesFolder + "stub.ts", function(data) {
    data = replaceComponentName(data, that.nameComponent + ".component");
    data = replaceSelector(data, that.nameComponent);
    data = replaceComponentStubName(data, that.nameComponent + ".component.stub");

    File.create(that.dir, nameFile, "ts", data);
  });
};

Component.prototype.createScss = function() {
  var nameFile = this.nameComponent + ".component",
    that = this;

  File.read(templatesFolder + "scss.scss", function(data) {
    data = replaceComponentName(data, that.nameComponent);

    File.create(that.dir, nameFile, "scss", data);
  });
};

Component.prototype.createHtml = function() {
  var nameFile = this.nameComponent + ".component",
    that = this;

  File.read(templatesFolder + "html.html", function(data) {
    data = replaceComponentName(data, that.nameComponent);

    File.create(that.dir, nameFile, "html", data);
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

function replaceTemplateUrl(data, nameComponent) {
  return data.replace(/NameOfTemplateUrl/g, "./" + nameComponent + ".html");
}

module.exports = Component;