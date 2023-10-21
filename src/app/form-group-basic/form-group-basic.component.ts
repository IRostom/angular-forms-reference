import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group-basic',
  templateUrl: './form-group-basic.component.html',
  styleUrls: ['./form-group-basic.component.scss'],
})
export class FormGroupBasicComponent {
  profile = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  profileNested = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.profile.valueChanges.subscribe((formVal) => {
      console.log('profile value emitted using valueChanges observable: ', formVal);

    })
    
  }

  onSubmit() {
    console.log('form group submitted with value: ', this.profile.value);
  }
  onNestedFormSubmit() {
    console.log(
      'nested form group submitted with value: ',
      this.profileNested.value
    );
  }
  onNestedFormPatch() {
    this.profileNested.patchValue({
      firstName: 'John',
      address: {
        city: 'cairo',
      },
    });
  }
  onNestedFormSet() {
    this.profileNested.setValue({
      firstName: 'John',
      lastName: 'Doe',
      address: {
        city: 'cairo',
        street: 'Maadi',
      },
    });
  }
  onNestedFormReset() {
    this.profileNested.reset();
  }
}
