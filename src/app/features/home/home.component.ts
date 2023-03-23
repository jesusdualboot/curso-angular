import { Component } from '@angular/core';
import { HomeService } from 'src/app/core/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: HomeService) {}
  items = this.service.getItems();
}
