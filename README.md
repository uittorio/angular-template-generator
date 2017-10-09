# angular-template-generator
generate files for angular application

# generate angular files
generate folder with files component, html, scss, stub, spec and interface for angular application

## Usage

Install with npm

```
npm i angular-template-generator -g

```

component generator

```
angular-template-generator cmp nameOfComponent
```
this will generate:
```
--nameOfComponent.component.ts
--nameOfComponent.component.spec.ts
--nameOfComponent.component.interface.ts
--nameOfComponent.component.stub.ts
--nameOfComponent.component.html
--nameOfComponent.component.scss
```

directive generator

```
angular-template-generator directive nameOfDirective
```
this will generate:
```
--nameOfDirective.directive.ts
--nameOfDirective.directive.spec.ts
--nameOfDirective.directive.interface.ts
--nameOfDirective.directive.stub.ts
```

service generator

```
angular-template-generator service nameOfService
```
this will generate:
```
--nameOfService.ts
--nameOfService.spec.ts
--nameOfService.stub.ts
--nameOfService.interface.ts
```
