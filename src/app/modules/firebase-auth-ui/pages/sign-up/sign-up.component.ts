import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  header = 'Sign up';
  registrationGroup!: FormGroup;
  loading = [false, false];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registrationGroup = new FormGroup({
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
    this.loading[0] = true;
    this.authService
      .SignUp(
        this.registrationGroup.value.email,
        this.registrationGroup.value.password
      )
      .then(() => {
        this.loading[0] = false;
      })
      .catch(() => {
        this.loading[0] = false;
      });
  }

  signUpWithGoogle() {
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
