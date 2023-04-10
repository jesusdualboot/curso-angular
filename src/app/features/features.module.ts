import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeService } from './home/home.service';
import { CardDirective } from './home/card.directive';

@NgModule({
  providers: [HomeService],
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    CardDirective,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class FeaturesModule {}
