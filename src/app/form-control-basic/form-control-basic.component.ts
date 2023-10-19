import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-basic',
  templateUrl: './form-control-basic.component.html',
  styleUrls: ['./form-control-basic.component.scss'],
})
export class FormControlBasicComponent {
  name = new FormControl('');
}
