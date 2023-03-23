import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionControlService } from './questionnaire/question-control.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    QuestionnaireComponent,
  ],
  providers: [QuestionControlService],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class FeaturesModule {}
