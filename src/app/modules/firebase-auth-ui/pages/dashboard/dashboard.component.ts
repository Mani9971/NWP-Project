import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api.service';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  // restaurants: Observable<Restaurant[]>;

  constructor(public authService: AuthService, private apiService: ApiService) {
    // this.restaurants = apiService.getAll();
  }
  ngOnInit(): void {}

  // add() {
  //   this.apiService
  //     .add({ data: 'testObjectData' })
  //     .then((res: any) => {
  //       console.log('Done!', res);
  //     })
  //     .catch(() => console.log('errorOccured!'));
  // }
}
