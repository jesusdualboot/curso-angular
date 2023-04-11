import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CardDirective } from '../card-helpers/card.directive';
import { CardItem } from '../card-helpers/card-item';
import { BaseCardComponent } from '../card-templates/base-card.component';

@Component({
  selector: 'app-card-loading',
  templateUrl: './card-loading.component.html',
  styleUrls: ['./card-loading.component.css'],
})
export class CardLoadingComponent implements OnInit {
  @Input() item!: CardItem;

  @ViewChild(CardDirective, { static: true })
  cardHost!: CardDirective;

  constructor() {}

  ngOnInit() {
    this.loadDynamicComponent();
  }

  loadDynamicComponent() {
    const viewContainerRef = this.cardHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<BaseCardComponent>(
      this.item.component
    );
    componentRef.instance.data = this.item.data;
  }
}
