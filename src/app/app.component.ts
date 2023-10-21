import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-forms-reference';
  links = [
    {
      name: 'Form Control',
      href: '/form-control',
    },
    {
      name: 'Form Group',
      href: '/form-group',
    },
    {
      name: 'Form Builder',
      href: '/form-builder',
    },
  ];
}
