/*================ IMPORTS ================*/
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from './ngzorro/ng-zorro.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*================ DIRECTIVES ================*/

/*================ PIPES ================*/

/*================ ENUMS ================*/

/*================ GUARDS ================*/

/*================ MODULES ================*/

const SHARED_COMPONENTS = [HeaderComponent, PageNotFoundComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    CommonModule,
    RouterModule,
  ],
})
export class SharedModule {}
