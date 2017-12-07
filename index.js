#! /usr/bin/env node
const ProcessService = require('./lib/process/process');
const processService = new ProcessService(process);

(function() {
  const Dir = require('./lib/utils/dir');

  if (!processService.hasArgument('type')) {
    consoleErrorAndExit('No type provided, Please provide one');
  }

  if (!processService.hasArgument('filename')) {
    consoleErrorAndExit('No filename provided, Please provide one');
  }

  const type = processService.getArgument('type');
  const fileName = processService.getArgument('filename');
  const prefix = processService.getArgument('prefix');
  const folder = processService.getFolder() + '/' + fileName;

  Dir.create(folder);

  switch(type) {
    case 'component':
      createComponentFiles(folder, fileName, prefix);
      break;
    case 'directive':
      createDirectiveFiles(folder, fileName, prefix);
      break;
    case 'service':
      createServiceFiles(folder, fileName);
      break;
    default:
      consoleErrorAndExit('type is invalid. Please read the doc');
  }
})();

function createComponentFiles(folder, name, prefix) {
  const Component = require('./lib/component/component');

  const component = new Component(folder, name, prefix);

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

function createDirectiveFiles(folder, name, prefix) {
  const Directive = require('./lib/directive/directive');

  const directive = new Directive(folder, name, prefix);

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