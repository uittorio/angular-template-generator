import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NameOfDirective } from './NameOfImportDirective';

describe('NameOfDirective', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>;

  @Component({
    template: `<div [NameOfSelector]></div>`
  })
  class TestHostComponent {
  }

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        NameOfDirective
      ]
    }).compileComponents().then(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
    });
  }));
});