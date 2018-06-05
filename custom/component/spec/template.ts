import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { $Component } from '$ComponentFile';

describe('$Component', () => {
	let testHostFixture: ComponentFixture<TestHostComponent>,
		NameOfDebugElement: DebugElement;
	
	@Component({
		template: `<$Selector></$Selector>`
	})
	class TestHostComponent {
	}
	
	beforeEach(async(() => {
		return TestBed.configureTestingModule({
			declarations: [
				TestHostComponent,
				$Component
			]
		}).compileComponents().then(() => {
			testHostFixture = TestBed.createComponent(TestHostComponent);
			NameOfDebugElement = testHostFixture.debugElement.query(By.directive($Component));
		});
	}));
});
