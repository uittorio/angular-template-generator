# angular-template-generator

[![Greenkeeper badge](https://badges.greenkeeper.io/uittorio/angular-template-generator.svg)](https://greenkeeper.io/)

generate files for an angular application

# generate angular files
generate folder with files component, html, scss, stub, spec and interface for an angular application

## Usage

**Install with npm**

```
npm i angular-template-generator -g

```

**component generator**

```
angular-template-generator type=component filename=nameOfComponent prefix?=nameOfPrefix
```
this will generate a folder with:
```
--nameOfComponent.component.ts
--nameOfComponent.component.spec.ts
--nameOfComponent.component.interface.ts
--nameOfComponent.component.stub.ts
--nameOfComponent.component.html
--nameOfComponent.component.scss
```
with a prefix defined it will add it to the selector and to the css class name (nameOfPrefixNameOfComponent)

**directive generator**

```
angular-template-generator type=directive filename=nameOfDirective prefix?=nameOfPrefix
```
this will generate a folder with
```
--nameOfDirective.directive.ts
--nameOfDirective.directive.spec.ts
--nameOfDirective.directive.interface.ts
--nameOfDirective.directive.stub.ts
```
with a prefix defined it will add it to the selector (nameOfPrefixNameOfDirective)

**service generator**

```
angular-template-generator type=service filename=nameOfService
```
this will generate a folder with
```
--nameOfService.ts
--nameOfService.spec.ts
--nameOfService.stub.ts
--nameOfService.interface.ts
```
