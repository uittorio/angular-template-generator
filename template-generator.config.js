const path = require('path');

function getFolder(file) {
  return path.resolve(__dirname, file);
}

module.exports = {
  schemas: {
    component: {
      parameters: ['name'],
      files: [
        {
          template: getFolder('./custom/component/template.ts'),
          class: require("./custom/component")
        },
        {
          template: getFolder('./custom/component/spec/template.ts'),
          class: require("./custom/component/spec")
        },
        {
          template: getFolder('./custom/component/stub/template.ts'),
          class: require("./custom/component/stub")
        },
        {
          template: getFolder('./custom/component/interface/template.ts'),
          class: require("./custom/component/interface")
        },
        {
          template: getFolder('./custom/component/html/template.html'),
          class: require("./custom/component/html")
        },
        {
          template: getFolder('./custom/component/scss/template.scss'),
          class: require("./custom/component/scss")
        }
      ]
    },
    directive: {
      parameters: ['name'],
      files: [
        {
          template: getFolder('./custom/directive/template.ts'),
          class: require("./custom/directive")
        },
        {
          template: getFolder('./custom/directive/spec/template.ts'),
          class: require("./custom/directive/spec")
        },
        {
          template: getFolder('./custom/directive/stub/template.ts'),
          class: require("./custom/directive/stub")
        },
        {
          template: getFolder('./custom/directive/interface/template.ts'),
          class: require("./custom/directive/interface")
        }
      ]
    },
    service: {
      parameters: ['name'],
      files: [
        {
          template: getFolder('./custom/service/template.ts'),
          class: require("./custom/service")
        },
        {
          template: getFolder('./custom/service/spec/template.ts'),
          class: require("./custom/service/spec")
        },
        {
          template: getFolder('./custom/service/stub/template.ts'),
          class: require("./custom/service/stub")
        },
        {
          template: getFolder('./custom/service/interface/template.ts'),
          class: require("./custom/service/interface")
        }
      ]
    }
  }
};
