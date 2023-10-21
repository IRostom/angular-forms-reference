import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder-service',
  templateUrl: './form-builder-service.component.html',
  styleUrls: ['./form-builder-service.component.scss'],
})
export class FormBuilderServiceComponent {
  profile = this._fb.group({
    firstName: [''],
    lastName: [''],
    address: this._fb.group({
      street: [''],
      city: [''],
    }),
    aliases: this._fb.array([this._fb.control('')]),
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.profile.valueChanges.subscribe((formVal) => {
      console.log(
        'profile value emitted using valueChanges observable: ',
        formVal
      );
    });
  }
  onNestedFormSubmit() {
    console.log('nested form group submitted with value: ', this.profile.value);
  }
  onNestedFormPatch() {
    this.profile.patchValue({
      firstName: 'John',
      address: {
        city: 'cairo',
      },
    });
  }

  /* Note:
    if you try to set a form array with multiple value more than initialized 
    you will get Cannot find form control at index error

    it's better to use patchValue method when you have formArray in your form
  */
  onNestedFormSet() {
    this.aliases.setValue
    this.profile.setValue({
      firstName: 'John',
      lastName: 'Doe',
      address: {
        city: 'cairo',
        street: 'Maadi',
      },
      aliases: ['IRostom'],
    });
  }
  onNestedFormReset() {
    this.profile.reset();
  }

  get aliases() {
    /* Because the returned control is of the type AbstractControl,
      you need to provide an explicit type to access the method syntax
      for the form array instance. */
    return this.profile.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this._fb.control(''));
  }

  removeAlias(index: number) {
    this.aliases.removeAt(index);
  }
}
