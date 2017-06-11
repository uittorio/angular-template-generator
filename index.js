#! /usr/bin/env node

const Component = require('./lib/component/component');
const Dir = require('./lib/utils/dir');
const folder = process.argv[2];

Dir.create(folder);
createComponentFiles(folder, folder);

function createComponentFiles(dir, nameComponent) {
  const component = new Component(dir, nameComponent);

  component.createFile();
  component.createSpec();
  component.createInterface();
  component.createStub();
  component.createScss();
  component.createHtml();
}
