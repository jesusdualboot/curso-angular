import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPipe } from './greeting.pipe';
import { ProductCardComponent } from './card-templates/product-card/product-card.component';
import { PostCardComponent } from './card-templates/post-card/post-card.component';
import { QuoteCardComponent } from './card-templates/quote-card/quote-card.component';
import { CardLoadingComponent } from './card-loading/card-loading.component';
import { CardDirective } from './card-helpers/card.directive';

@NgModule({
  declarations: [
    GreetingPipe,
    ProductCardComponent,
    PostCardComponent,
    QuoteCardComponent,
    CardDirective,
    CardLoadingComponent,
  ],
  exports: [
    CardLoadingComponent,
    GreetingPipe,
    PostCardComponent,
    QuoteCardComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
