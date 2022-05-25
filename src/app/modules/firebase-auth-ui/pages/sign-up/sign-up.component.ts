import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnDestroy {
  header = 'Sign up';
  registrationGroup!: FormGroup;
  subscription!: Subscription;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registrationGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
    });
  }

  signUpWithEmail() {
    this.authService.SignUp(
      this.registrationGroup.value.email,
      this.registrationGroup.value
    );
  }

  signUpWithGoogle() {
    this.authService.GoogleAuth();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
