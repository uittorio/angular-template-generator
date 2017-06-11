import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NameOfComponent } from 'NameOfImportComponent';

describe('NameOfComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>;

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
    });
  }));
});