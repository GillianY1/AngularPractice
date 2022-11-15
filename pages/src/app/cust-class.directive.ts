import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustClass]'
})
export class CustClassDirective {

  constructor(private element:ElementRef ) {
    console.log('class directive customed class');
    this.element.nativeElement.style.backgroundColor = 'orange';
  }

}
