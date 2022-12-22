import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { ColletionsHomeComponent } from './colletions-home/colletions-home.component';
import { CollectionHomeComponent } from './collection-home/collection-home.component';


@NgModule({
  declarations: [
    ColletionsHomeComponent,
    CollectionHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports:[
    ColletionsHomeComponent,
    CollectionHomeComponent
  ]
})
export class CollectionsModule { }
