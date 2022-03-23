import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register-order/register.component';
import { NgZorroModule } from 'src/app/shared/ngzorro/ng-zorro.module';
import { SenderAddresseeInformationComponent } from './register-order/sender-addressee-information/sender-addressee-information.component';
import { GeneralDataComponent } from './register-order/general-data/general-data.component';


@NgModule({
  declarations: [
    RegisterComponent,
    SenderAddresseeInformationComponent,
    GeneralDataComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NgZorroModule
  ]
})
export class RegisterModule { }
