import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlBasicComponent } from './form-control-basic/form-control-basic.component';
import { FormGroupBasicComponent } from './form-group-basic/form-group-basic.component';
import { FormBuilderServiceComponent } from './form-builder-service/form-builder-service.component';

const routes: Routes = [
  {
    path: 'form-control',
    component: FormControlBasicComponent,
  },
  {
    path: 'form-group',
    component: FormGroupBasicComponent,
  },
  {
    path: 'form-builder',
    component: FormBuilderServiceComponent,
  },
  {
    path: '',
    redirectTo: 'form-control',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
