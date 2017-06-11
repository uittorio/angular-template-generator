#! /usr/bin/env node

const Component = require('./lib/component/component');
const Service = require('./lib/service/service');

const type = process.argv[2];
const fileName = process.argv[3];
const folder = process.cwd();

if (type === "cmp") {
  createComponentFiles(folder, fileName);
} else if(type === 'service') {
  createServiceFiles(folder, fileName);
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

function createServiceFiles(folder, name) {
  const service = new Service(folder, name);

  let promises = [
    service.createFile(),
    service.createSpec()
  ];

  Promise.all(promises).then(() => {
    process.exit(0);
  });
}