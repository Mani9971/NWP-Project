import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  header = 'Reset password';
  emailControl!: FormControl;
  loading = [false, false];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.email,
    ]);
  }

  sendPasswordResetEmail() {
    this.authService.ForgotPassword(this.emailControl.value);
  }
}
