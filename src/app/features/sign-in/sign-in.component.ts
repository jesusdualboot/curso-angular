import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private router: Router, private auth: AuthService) {}

  name = new FormControl('');
  password = new FormControl('');

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  submit() {
    let sign = this.auth.signIn({
      name: this.name.value!,
      password: this.password.value!,
    });
    if (sign) this.navigate('/profile');
  }
}
