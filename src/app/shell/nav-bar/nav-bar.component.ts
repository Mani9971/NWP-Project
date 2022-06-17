import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  items = [
    { title: 'Home', route: '/home' },
    { title: 'Restaurants', route: '/restaurants' },
    { title: 'My entries', route: '/user-entries' },
    { title: 'Item4', route: '/route3' },
    { title: 'Item5', route: '/route4' },
  ];

  constructor(private authService: AuthService) {}
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {}
}
