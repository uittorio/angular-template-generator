import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { $Directive } from '$DirectiveFile';

describe('$Directive', () => {
	let testHostFixture: ComponentFixture<TestHostComponent>;
	
	@Component({
		template: `<div $Selector></div>`
	})
	class TestHostComponent {
	}
	
	beforeEach(async(() => {
		return TestBed.configureTestingModule({
			declarations: [
				TestHostComponent,
				$Directive
			]
		}).compileComponents().then(() => {
			testHostFixture = TestBed.createComponent(TestHostComponent);
		});
	}));
});
