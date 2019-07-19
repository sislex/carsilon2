import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {RouteFormPageRoutingModule} from './route-form-routing.module';
import {RouteFormPage} from './route-form';
import {FormsModule} from '@angular/forms';
import {RoutesPageModule} from '../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouteFormPageRoutingModule,
    FormsModule,
    RoutesPageModule
  ],
  declarations: [
    RouteFormPage,
  ]
})
export class RouteFormModule { }
