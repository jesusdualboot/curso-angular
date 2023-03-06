import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { matchValidator } from 'src/app/core/matchValidator.directive';
import { passwordValidator } from 'src/app/core/passwordValidator.directive';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  fg: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.fg = fb.group({
      name: ['', [Validators.required]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), passwordValidator()],
      ],
      cPassword: ['', [matchValidator('password', false)]],
    });
  }

  get nameRequired() {
    return this.fg.get('name')?.invalid && this.fg.get('name')?.touched;
  }
  get passwordRequired() {
    return this.fg.get('password')?.invalid && this.fg.get('password')?.touched;
  }

  onSubmit() {
    if (this.fg.invalid) return console.log('formulario invalido');

    if (this.fg.valid) this.navigate('/sign-in');
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
}
