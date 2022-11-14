import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustClass]'
})
export class CustClassDirective {

  constructor() {
    console.log('class directive customed class');
  }

}
