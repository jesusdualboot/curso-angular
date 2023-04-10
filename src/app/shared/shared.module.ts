import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPipe } from './greeting.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { CardLoadingComponent } from './card-loading/card-loading.component';

@NgModule({
  declarations: [
    GreetingPipe,
    ProductCardComponent,
    PostCardComponent,
    QuoteCardComponent,
    BaseCardComponent,
    CardLoadingComponent,
  ],
  exports: [
    GreetingPipe,
    PostCardComponent,
    QuoteCardComponent,
    ProductCardComponent,
    BaseCardComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
