import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register-order/register.component';
import { NgZorroModule } from 'src/app/shared/ngzorro/ng-zorro.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NgZorroModule
  ]
})
export class RegisterModule { }
