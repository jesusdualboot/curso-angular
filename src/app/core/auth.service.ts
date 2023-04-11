import { Injectable } from '@angular/core';
import { UserData } from '../shared/interfaces/main.data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  user: UserData | undefined;

  signUp(input: UserData): boolean {
    if (input.name != '' && input.email != '' && input.password != '') {
      this.user = input;

      return true;
    } else {
      return false;
    }
  }

  signIn(input: UserData): boolean {
    return (
      this.user?.name == input.name && this.user?.password == input.password
    );
  }
}
