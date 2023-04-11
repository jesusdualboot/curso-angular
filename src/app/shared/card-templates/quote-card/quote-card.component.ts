import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/main.data';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements BaseCardComponent {
  @Input() data!: CardData;
}
