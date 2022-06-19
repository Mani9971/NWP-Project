import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  userData: any;
  userActionSubscription!: Subscription;
  loggedInitems = [
    {
      label: 'Sign Out',
      icon: 'pi pi-fw pi-sign-out',
      command: () => {
        this.authService.SignOut();
      },
    },
  ];

  loggedOutitems = [{ label: 'Sign In', icon: 'pi pi-fw pi-sign-in' }];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') ?? '');
    this.userActionSubscription = this.authService.userAction$.subscribe(() => {
      this.userData = JSON.parse(localStorage.getItem('user') ?? '');
    });
  }

  ngOnDestroy(): void {
    if (this.userActionSubscription) {
      this.userActionSubscription.unsubscribe();
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
