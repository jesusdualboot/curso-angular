import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPipe } from './greeting.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { QuestionComponent } from './question/question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    GreetingPipe,
    ProductCardComponent,
    PostCardComponent,
    QuoteCardComponent,
    BaseCardComponent,
    QuestionComponent,
    DynamicFormComponent,
  ],
  exports: [
    GreetingPipe,
    PostCardComponent,
    QuoteCardComponent,
    ProductCardComponent,
    BaseCardComponent,
    QuestionComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
