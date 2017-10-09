import { Directive } from '@angular/core';
import { INameOfDirective } from './NameOfImportInterface';

@Directive({
  selector: '[NameOfSelector]'
})
export class NameOfDirective implements INameOfDirective {

}


