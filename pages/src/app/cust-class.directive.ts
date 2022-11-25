import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustClass]'
})
export class CustClassDirective {
  //@Input() backgroundColor: string | undefined;

  constructor(private element:ElementRef ) {}

  @Input() set appCustClass(color:string){
    this.element.nativeElement.style.backgroundColor = color;//this.backgroundColor;//'orange';
  }

}
