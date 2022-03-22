import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const DIRECTIVES: any = [];

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  imports: [CommonModule],
})
export class DirectivesModule {}
