import { NgModule, ElementRef, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColletionsHomeComponent } from './colletions-home/colletions-home.component';

const routes: Routes = [
  {path:'', component: ColletionsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
