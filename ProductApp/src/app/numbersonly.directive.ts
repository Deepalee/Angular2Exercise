import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[numbersonly]'
})
export class NumberonlyDirective {

  constructor(public el:ElementRef) { }

  @HostListener('keypress',['$event']) onkeypress(evt) {
    
    var regext = new RegExp("[0-9]");
    if(!regext.test(evt.key)) {
      event.preventDefault();
    }
  }
}
