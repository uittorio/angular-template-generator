import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { NameOfComponent } from './NameOfImportComponent';

describe('NameOfComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>,
		NameOfDebugElement: DebugElement;

  @Component({
    template: `<NameOfSelector></NameOfSelector>`
  })
  class TestHostComponent {
  }

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        NameOfComponent
      ]
    }).compileComponents().then(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
			NameOfDebugElement = testHostFixture.debugElement.query(By.directive(NameOfComponent));
    });
  }));
});