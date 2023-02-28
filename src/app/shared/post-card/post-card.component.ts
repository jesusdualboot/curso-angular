import { Component, Input } from '@angular/core';
import { CardData } from '../interfaces/main.data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() data!: CardData;
}
