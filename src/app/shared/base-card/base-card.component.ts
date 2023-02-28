import { Component, Input } from '@angular/core';
import { CardData } from '../interfaces/main.data';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css'],
})
export class BaseCardComponent {
  @Input() typeCard!: number;
  @Input() data!: CardData;
}
