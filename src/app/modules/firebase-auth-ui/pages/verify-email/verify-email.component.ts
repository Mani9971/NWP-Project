import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailComponent implements OnInit {
  header = 'Registration successful!';
  userData: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userData = localStorage.getItem('user');
  }

  resendVerificationMail() {
    this.authService.SendVerificationMail();
  }
}
