import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { CardItem } from 'src/app/shared/card-helpers/card-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: CardItem[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.items = this.homeService.getItems();
  }
}
