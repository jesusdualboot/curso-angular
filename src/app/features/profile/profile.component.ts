import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private auth: AuthService) {}

  user = this.auth.user;
}
