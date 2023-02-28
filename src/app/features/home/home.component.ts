import { Component } from '@angular/core';
import { HomeService } from 'src/app/core/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private service = new HomeService();
  items = this.service.getItems();
  // info = {
  //   title: 'Money plant',
  //   description:
  //     'It is considered as a lucky plant which brings wealth, health, prosperity and happiness in the house.',
  //   image:
  //     'https://vkflowerbees.com/wp-content/uploads/2022/03/money-plant.jpeg',
  //   price: 29,
  // };
}
