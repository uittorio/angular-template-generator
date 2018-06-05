class ProcessService {
  constructor(process) {
    this.process = process;
    this.argv = process.argv;
  }

  hasArgument(argumentName) {
    return !!this.findArgument(argumentName);
  }

  getArgument(argumentName) {
    return this.findArgument(argumentName);
  }

  findArgument(argumentName) {
    let valueToFind = '';
    this.argv.forEach((argument) => {
      const values = argument.split('=');
      if (argumentName === values[0])
        valueToFind =  values[1];
    });

    return valueToFind;
  }

  getFolder() {
    return this.process.cwd();
  }

  exit(message) {
    console.error(message);
    this.process.exit(0);
  }
}

module.exports = ProcessService;