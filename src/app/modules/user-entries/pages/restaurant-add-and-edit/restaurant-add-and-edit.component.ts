import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { map, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';
import { MenuItemDialogComponent } from '../../components/menu-item-dialog/menu-item-dialog.component';

@Component({
  templateUrl: './restaurant-add-and-edit.component.html',
  styleUrls: ['./restaurant-add-and-edit.component.scss'],
  providers: [MessageService, DialogService],
})
export class RestaurantAddAndEditComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'My entries',
      url: 'user-entries',
    },
    {
      label: 'Entry',
    },
  ];

  data$ = new Observable<any>();
  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  showMenuItemDialog() {
    const ref = this.dialogService.open(MenuItemDialogComponent, {
      header: 'Add menu item',
      width: '40%',
    });
  }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) =>
        this.apiService.getRestaurant(params['id']).pipe(
          map((restaurant: any) => {
            return restaurant?.menuItems.map((x: any) => x);
          })
        )
      )
    );
  }
}
