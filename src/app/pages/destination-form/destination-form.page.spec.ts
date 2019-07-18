import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationFormPage } from './destination-form.page';

describe('DestinationFormPage', () => {
  let component: DestinationFormPage;
  let fixture: ComponentFixture<DestinationFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
