#! /usr/bin/env node
const ProcessService = require('./lib/process/process');
const processService = new ProcessService(process);

(function() {
  const Dir = require('./lib/utils/dir');

  if (!processService.hasFirstArgument()) {
    consoleErrorAndExit('No type provided, Please provide one');
  }

  if (!processService.hasSecondArgument()) {
    consoleErrorAndExit('No filename provided, Please provide one');
  }

  const type = processService.getFirstArgument();
  const fileName = processService.getSecondArgument();
  const folder = processService.getFolder() + '/' + fileName;

  Dir.create(folder);

  switch(type) {
    case 'cmp':
      createComponentFiles(folder, fileName);
      break;
    case 'directive':
      createDirectiveFiles(folder, fileName);
      break;
    case 'service':
      createServiceFiles(folder, fileName);
      break;
    default:
      consoleErrorAndExit('type is invalid. Please read the doc');
  }
})();

function createComponentFiles(folder, name) {
  const Component = require('./lib/component/component');

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
    consoleLogAndExit('Component created');
  });
}

function createDirectiveFiles(folder, name) {
  const Directive = require('./lib/directive/directive');

  const directive = new Directive(folder, name);

  let promises = [
    directive.createFile(),
    directive.createSpec(),
    directive.createStub(),
    directive.createInterface()
  ];

  Promise.all(promises).then(() => {
    consoleLogAndExit('Directive created');
  });
}

function createServiceFiles(folder, name) {
  const Service = require('./lib/service/service');

  const service = new Service(folder, name);

  let promises = [
    service.createFile(),
    service.createSpec(),
    service.createStub(),
    service.createInterface()
  ];

  Promise.all(promises).then(() => {
    consoleLogAndExit('Service created');
  });
}

function consoleErrorAndExit(message) {
  console.error(message);
  processService.exit();
}

function consoleLogAndExit(message) {
  console.log(message);
  processService.exit();
}