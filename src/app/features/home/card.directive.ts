import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
