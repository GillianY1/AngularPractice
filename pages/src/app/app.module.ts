import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewClassDirective } from './new-class.directive';
import { CustClassDirective } from './cust-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewClassDirective,
    CustClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
