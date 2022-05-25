import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  header = 'Sign in';
  loginGroup!: FormGroup;
  loading = [false, false];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
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

  signInWithEmail() {
    this.loading[0] = true;
    this.authService
      .SignIn(this.loginGroup.value.email, this.loginGroup.value.password)
      .then(() => {
        this.loading[0] = false;
      })
      .catch(() => {
        this.loading[0] = false;
      });
  }

  signInWithGoogle() {
    this.loading[1] = true;
    this.authService
      .GoogleAuth()
      .then(() => {
        this.loading[1] = false;
      })
      .catch(() => {
        this.loading[1] = false;
      });
  }
}
