import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPipe } from './greeting.pipe';

@NgModule({
  declarations: [GreetingPipe],
  exports: [GreetingPipe],
  imports: [CommonModule],
})
export class SharedModule {}
