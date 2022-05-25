import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirebaseAuthUiRoutingModule } from './firebase-auth-ui-routing.module';
import { FirebaseAuthUiComponent } from './firebase-auth-ui.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    FirebaseAuthUiComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, FirebaseAuthUiRoutingModule, ButtonModule],
})
export class FirebaseAuthUiModule {}
