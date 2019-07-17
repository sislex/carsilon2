import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RouteFormPage} from './route-form';

const routes: Routes = [
  {
    path: '',
    component: RouteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteFormPageRoutingModule { }
