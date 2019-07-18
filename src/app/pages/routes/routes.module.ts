import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoutesPage } from './routes.page';
import {SearchFieldComponent} from '../../components/search-field/search-field.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RoutesPage,
    SearchFieldComponent
  ]
})
export class RoutesPageModule {}
