import { Type } from '@angular/core';
import { CardData } from './interfaces/main.data';

export class CardItem {
  private num: number;
  private info: CardData;

  constructor(num: number, info: CardData) {
    this.num = num;
    this.info = info as CardData;
  }

  get type(): number {
    return this.num;
  }

  get data(): CardData {
    return this.info;
  }
}
