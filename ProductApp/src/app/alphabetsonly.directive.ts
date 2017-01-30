import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[alphabetsonly]'
})
export class AlphabetsonlyDirective {

 constructor(public el:ElementRef) { }

  @HostListener('keypress',['$event']) onkeypress(evt) {
    
    var regext = new RegExp("[^a-zA-Z]");
    if(regext.test(evt.key)) {
      event.preventDefault();
    }
  }

}
