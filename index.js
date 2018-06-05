#! /usr/bin/env node
const ProcessService = require('./lib/process/process');
const processService = new ProcessService(process);
const FileTemplateGenerator = require('file-template-generator');

(function() {
  if (!processService.hasArgument('type')) {
    processService.exit('No type provided, Please provide one');
  }

  if (!processService.hasArgument('filename')) {
    processService.exit('No filename provided, Please provide one');
  }

  const type = processService.getArgument('type');
  const fileName = processService.getArgument('filename');
  const prefix = processService.getArgument('prefix');
  const templateGeneratorConfig = require('./template-generator.config');

  const path = processService.getFolder() + '/' + fileName;

  switch(type) {
    case 'component':
      FileTemplateGenerator.generate({
        files: templateGeneratorConfig.schemas.component.files,
        path: path,
        parameters: {
          name: fileName,
          prefix: prefix
        }
      });
      break;
    case 'directive':
      FileTemplateGenerator.generate({
        files: templateGeneratorConfig.schemas.directive.files,
        path: path,
        parameters: {
          name: fileName,
          prefix: prefix
        }
      });
      break;
    case 'service':
      FileTemplateGenerator.generate({
        files: templateGeneratorConfig.schemas.service.files,
        path: path,
        parameters: {
          name: fileName,
          prefix: prefix
        }
      });
      break;
    default:
      processService.exit('type is invalid. Please read the doc');
  }
})();
