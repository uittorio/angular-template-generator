class ProcessService {
  constructor(process) {
    this.process = process;
  }

  hasAllArguments() {
    return this.hasFirstArgument() && this.hasSecondArgument() && this.hasThirdArgument();
  }

  hasFirstArgument() {
    return !!this.process.argv[2] && !!this.process.argv[2].toString();
  }

  hasSecondArgument() {
    return !!this.process.argv[3] && !!this.process.argv[3].toString();
  }

  getFirstArgument() {
    return this.process.argv[2];
  }

  getSecondArgument() {
    return this.process.argv[3];
  }

  getFolder() {
    return this.process.cwd();
  }

  exit() {
    this.process.exit(0);
  }
}

module.exports = ProcessService;