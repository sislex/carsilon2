import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {RouteFormPageRoutingModule} from './route-form-routing.module';
import {RouteFormPage} from './route-form';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouteFormPageRoutingModule,
    FormsModule
  ],
  declarations: [
    RouteFormPage,
  ]
})
export class RouteFormModule { }
