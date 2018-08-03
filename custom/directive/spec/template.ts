import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { $Directive } from '$DirectiveFile';

describe('$Directive', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  @Component({
    template: `<div $Selector></div>`
  })
  class TestHostComponent {
  }

  beforeEach(async(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        $Directive
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  }));
});
