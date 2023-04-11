import { Type } from '@angular/core';
import { BaseCardComponent } from '../card-templates/base-card.component';

export class CardItem {
  constructor(public component: Type<BaseCardComponent>, public data: any) {}
}
