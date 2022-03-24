import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralDataComponent } from './register-order/general-data/general-data.component';
import { RegisterComponent } from './register-order/register.component';
import { SenderAddresseeInformationComponent } from './register-order/sender-addressee-information/sender-addressee-information.component';

const routes: Routes = [
  {
    path: '',
    // children: [
    //   {path: 'a', component: GeneralDataComponent},
    //   {path:'b', component: SenderAddresseeInformationComponent},

    // ],
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
