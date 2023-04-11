import { Component, Input } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';
import { CardData } from '../../interfaces/main.data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements BaseCardComponent {
  @Input() data!: CardData;
}
