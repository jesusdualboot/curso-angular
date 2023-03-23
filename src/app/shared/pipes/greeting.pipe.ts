import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(name: string): string {
    const greetings = [
      'Hello name, the greatest',
      'Hey name, this will be a beautiful day',
      'Cheers name, you rock!',
    ];
    let num = Math.floor(Math.random() * 3);
    let greet = greetings[num].replace('name', name);
    return greet;
  }
}
