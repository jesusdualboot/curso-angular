import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { BaseCardComponent } from 'src/app/shared/base-card/base-card.component';
import { QuoteCardComponent } from 'src/app/shared/quote-card/quote-card.component';
import { ProductCardComponent } from 'src/app/shared/product-card/product-card.component';
import { PostCardComponent } from 'src/app/shared/post-card/post-card.component';
import { CardDirective } from './card.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <div class="flex flex-col items-center w-full">
      <p class="text-6xl mt-5 font-bold italic">HOME PAGE</p>

      <div class="flex flex-col gap-5 items-center mt-5">
        <ng-template adHost></ng-template>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  currentCardIndex = -1;

  @ViewChild(CardDirective, { static: true }) cardHost!: CardDirective;

  interval: any;

  constructor(private service: HomeService) {}
  items = this.service.getItems();

  ngOnInit(): void {
    this.loadComponent();
    this.getCards();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.items.length;
    const cardItem = this.items[this.currentCardIndex];

    console.log(this.cardHost);
    const viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<BaseCardComponent>(
      cardItem.component
    );
    componentRef.instance.data = cardItem.data;
  }

  getCards() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
