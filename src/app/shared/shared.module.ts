import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPipe } from './pipes/greeting.pipe';
import { ProductCardComponent } from './card-templates/product-card/product-card.component';
import { PostCardComponent } from './card-templates/post-card/post-card.component';
import { QuoteCardComponent } from './card-templates/quote-card/quote-card.component';
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
