import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustClass]'
})
export class CustClassDirective {
  //@Input() backgroundColor: string | undefined;

  constructor(private element:ElementRef ) {}

  /* @Input('appCustClass') set backgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor = color;//this.backgroundColor;//'orange';
  }
  */

  @Input('appCustClass') set ClassNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
