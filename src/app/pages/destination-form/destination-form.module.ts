import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DestinationFormPage } from './destination-form.page';
import {RoutesPageModule} from '../routes/routes.module';
import {SearchFieldComponent} from '../../components/search-field/search-field.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RoutesPageModule,
  ],
  declarations: [DestinationFormPage],
})
export class DestinationFormPageModule {}
