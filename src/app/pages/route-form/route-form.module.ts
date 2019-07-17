import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {RouteFormPageRoutingModule} from './route-form-routing.module';
import {RouteFormPage} from './route-form';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouteFormPageRoutingModule
  ],
  declarations: [
    RouteFormPage,
  ]
})
export class RouteFormModule { }
