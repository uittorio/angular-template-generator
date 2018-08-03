import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { $Component } from '$ComponentFile';

describe('$Component', () => {
	let fixture: ComponentFixture<TestHostComponent>,
		NameOfDebugElement: DebugElement;

	@Component({
		template: `<$Selector></$Selector>`
	})
	class TestHostComponent {
	}

	beforeEach(async(async() => {
		await TestBed.configureTestingModule({
			declarations: [
				TestHostComponent,
				$Component
			]
		}).compileComponents();

		fixture = TestBed.createComponent(TestHostComponent);
		NameOfDebugElement = fixture.debugElement.query(By.directive($Component));
	}));
});
