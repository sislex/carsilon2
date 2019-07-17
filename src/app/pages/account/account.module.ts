import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account';
import { AccountPageRoutingModule } from './account-routing.module';
import {AmplifyIonicModule} from 'aws-amplify-angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountPageRoutingModule,
    AmplifyIonicModule
  ],
  declarations: [
    AccountPage,
  ]
})
export class AccountModule { }
