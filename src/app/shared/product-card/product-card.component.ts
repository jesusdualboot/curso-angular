import { Component, Input } from '@angular/core';
import { CardData } from '../interfaces/main.data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() data!: CardData;
}
