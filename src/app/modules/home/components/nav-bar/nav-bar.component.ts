import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  items = [
    { title: 'Item1', route: '/home' },
    { title: 'Item2', route: '/route1' },
    { title: 'Item3', route: '/route2' },
    { title: 'Item4', route: '/route3' },
    { title: 'Item5', route: '/route4' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
