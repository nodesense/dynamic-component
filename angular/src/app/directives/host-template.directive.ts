import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[host-template]'
})
export class HostTemplateDirective {

  constructor(public viewContainerRef: ViewContainerRef) { 
    console.log("host template directive ")
  }

}
