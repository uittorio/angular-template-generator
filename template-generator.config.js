module.exports = {
  schemas: {
    component: {
      parameters: ['name'],
      files: [
        {
          template: './custom/component/template.ts',
          class: require("./custom/component")
        },
        {
          template: './custom/component/spec/template.ts',
          class: require("./custom/component/spec")
        },
        {
          template: './custom/component/stub/template.ts',
          class: require("./custom/component/stub")
        },
        {
          template: './custom/component/interface/template.ts',
          class: require("./custom/component/interface")
        },
        {
          template: './custom/component/html/template.html',
          class: require("./custom/component/html")
        },
        {
          template: './custom/component/scss/template.scss',
          class: require("./custom/component/scss")
        }
      ]
    },
    directive: {
      parameters: ['name'],
      files: [
        {
          template: './custom/directive/template.ts',
          class: require("./custom/directive")
        },
        {
          template: './custom/directive/spec/template.ts',
          class: require("./custom/directive/spec")
        },
        {
          template: './custom/directive/stub/template.ts',
          class: require("./custom/directive/stub")
        },
        {
          template: './custom/directive/interface/template.ts',
          class: require("./custom/directive/interface")
        }
      ]
    },
    service: {
      parameters: ['name'],
      files: [
        {
          template: './custom/service/template.ts',
          class: require("./custom/service")
        },
        {
          template: './custom/service/spec/template.ts',
          class: require("./custom/service/spec")
        },
        {
          template: './custom/service/stub/template.ts',
          class: require("./custom/service/stub")
        },
        {
          template: './custom/service/interface/template.ts',
          class: require("./custom/service/interface")
        }
      ]
    }
  }
};