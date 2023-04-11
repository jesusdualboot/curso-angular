import { Component, Input } from '@angular/core';
import { CardData } from '../../interfaces/main.data';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements BaseCardComponent {
  @Input() data!: CardData;
}
