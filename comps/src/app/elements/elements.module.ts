import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { EletmentsHomeComponent } from './eletments-home/eletments-home.component';


@NgModule({
  declarations: [
    EletmentsHomeComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
