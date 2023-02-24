import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private router: Router, private auth: AuthService) {}

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  submit() {
    let sign = this.auth.signUp({
      name: this.name.value!,
      email: this.email.value!,
      password: this.password.value!,
    });
    if (sign) this.navigate('/sign-in');
  }
}
