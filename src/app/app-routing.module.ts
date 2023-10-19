import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlBasicComponent } from './form-control-basic/form-control-basic.component';

const routes: Routes = [
  {
    path: '',
    component: FormControlBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
