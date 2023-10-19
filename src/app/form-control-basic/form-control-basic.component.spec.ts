import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlBasicComponent } from './form-control-basic.component';

describe('FormControlBasicComponent', () => {
  let component: FormControlBasicComponent;
  let fixture: ComponentFixture<FormControlBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlBasicComponent]
    });
    fixture = TestBed.createComponent(FormControlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
