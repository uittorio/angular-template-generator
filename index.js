const fs = require('fs');
const readline = require('readline');
const folder = process.argv[2];
const toPascalCase = require('to-pascal-case');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nameComponent = 'mhr-card-header';
const dir = folder + '/' + nameComponent;
createDir(dir);
createComponentFiles(dir, nameComponent);

// rl.question('Name of component:', function(answer) {
//   const dir = folder + '/' + answer;
//
//   createDir(dir);
//   createComponentFiles(dir, answer);
//
//   rl.close();
//   process.exit(1);
// });

function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function createComponentFiles(dir, nameComponent) {
  createComponent(dir, nameComponent);
  // createComponentSpec(dir, nameComponent);
  // createComponentStub(dir, nameComponent);
  // createComponentInterface(dir, nameComponent);
  // createComponentHtml(dir, nameComponent);
  // createComponentScss(dir, nameComponent);
}

function closeNode() {
  process.exit(1)
}

function createComponent(dir, nameComponent) {
  var nameFile = nameComponent + '.component';

  fs.readFile('./class.test.ts', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    data = replaceComponentName(data, nameComponent);
    data = replaceSelector(data, nameComponent);
    data = replaceTemplateUrl(data, nameComponent);

    createFile(dir, nameFile, 'ts', data, closeNode)
  });

}

function replaceComponentName(data, nameComponent) {
  return data.replace(/NameOfComponent/g, toPascalCase(nameComponent));
}

function replaceSelector(data, nameComponent) {
  return data.replace(/NameOfTemplateUrl/g, './' + nameComponent + '.component.html');
}

function replaceTemplateUrl(data, nameComponent) {
  return data.replace(/NameOfSelector/g, nameComponent);
}

function createComponentSpec(dir, nameComponent) {
  createFile(dir, nameComponent + '.component', 'ts');
}

function createComponentStub(dir, nameComponent) {
  createFile(dir, nameComponent + '.component.stub', 'ts');
}

function createComponentInterface(dir, nameComponent) {
  createFile(dir, nameComponent + '.component.interface', 'ts');
}

function createComponentHtml(dir, nameComponent) {
  createFile(dir, nameComponent + '.component', '.html');
}

function createComponentScss(dir, nameComponent) {
  createFile(dir, nameComponent + '.component', '.scss');
}


function createFile(dir, nameFile, extension, content, callBack) {
  const file = dir + '/' + nameFile + '.' + extension;
  const fileTemplate = 'export class';

  fs.writeFile(dir + '/' + nameFile + '.' + extension, content, function(err) {
    if(err) {
      return console.log(err);
    }

    callBack();
  });
}
