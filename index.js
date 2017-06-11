#! /usr/bin/env node

const Component = require('./lib/component/component');

const type = process.argv[2];
const fileName = process.argv[3];
const folder = process.cwd();

if (type === "cmp") {
  createComponentFiles(folder, fileName);
}

function createComponentFiles(folder, name) {
  const component = new Component(folder, name);

  let promises = [
    component.createFile(),
    component.createSpec(),
    component.createInterface(),
    component.createStub(),
    component.createScss(),
    component.createHtml()
  ];

  Promise.all(promises).then(() => {
    process.exit(0);
  });
}