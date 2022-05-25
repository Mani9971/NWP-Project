import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FirebaseAuthUiRoutingModule } from './firebase-auth-ui-routing.module';
import { FirebaseAuthUiComponent } from './firebase-auth-ui.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';

@NgModule({
  declarations: [
    FirebaseAuthUiComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FirebaseAuthUiRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    ProgressSpinnerModule,
  ],
})
export class FirebaseAuthUiModule {}
