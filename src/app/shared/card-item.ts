import { Component, Type } from '@angular/core';
import { CardData } from './interfaces/main.data';
import { ProductCardComponent } from './product-card/product-card.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { PostCardComponent } from './post-card/post-card.component';

export class CardItem {
  private comp: any;
  private info: CardData;

  constructor(component: any, info: CardData) {
    this.comp = component;
    this.info = info as CardData;
  }

  get component(): any {
    return this.comp;
  }

  get data(): CardData {
    return this.info;
  }
}
