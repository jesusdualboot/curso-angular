import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cardHost]',
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
