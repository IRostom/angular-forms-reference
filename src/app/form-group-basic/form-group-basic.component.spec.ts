import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupBasicComponent } from './form-group-basic.component';

describe('FormGroupBasicComponent', () => {
  let component: FormGroupBasicComponent;
  let fixture: ComponentFixture<FormGroupBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupBasicComponent]
    });
    fixture = TestBed.createComponent(FormGroupBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
