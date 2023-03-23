import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/main.data';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent {
  @Input()
  data!: CardData;
}
