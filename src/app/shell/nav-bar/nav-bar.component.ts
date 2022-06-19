import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  name = '';
  loggedInitems = [{ label: 'Sign Out', icon: 'pi pi-fw pi-sign-out' }];

  loggedOutitems = [{ label: 'Sign In', icon: 'pi pi-fw pi-sign-in' }];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
}
