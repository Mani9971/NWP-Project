import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { map, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/@core/services/api.service';
import { NotificationService } from 'src/app/@core/services/notification.service';
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
  restaurantId = '';
  showTable = false;

  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}

  showMenuItemDialog(item?: any) {
    const ref = this.dialogService.open(MenuItemDialogComponent, {
      data: {
        restaurantId: this.restaurantId,
        data: item ?? '',
      },
      header: 'Add menu item',
      width: '40%',
    });

    ref.onClose.subscribe((data) => {
      if (!data) {
        return;
      }
      if (!data.editMode) {
        this.apiService
          .addItem(this.restaurantId, data.data)
          .then(() =>
            this.notificationService.showSuccessNotification('Entry added')
          )
          .catch((err) => {
            this.notificationService.showErrorNotification('Error occurred');
          });
        return;
      }
      this.apiService
        .updateItem(this.restaurantId, data.data.id, data.data)
        .then(() =>
          this.notificationService.showSuccessNotification('Entry updated')
        )
        .catch((err) => {
          this.notificationService.showErrorNotification('Error occurred');
        });
    });
  }

  ngOnInit(): void {
    this.data$ = this.route.params.pipe(
      switchMap((params) =>
        this.apiService.getMenuItems(params['id']).pipe(
          map((menuItems: any) => {
            this.showTable = true;
            this.restaurantId = params['id'];
            return menuItems.filter((x: any) => x.name !== null);
          })
        )
      )
    );
  }

  deleteItem(itemId: string) {
    this.apiService
      .deleteItem(this.restaurantId, itemId)
      .then(() =>
        this.notificationService.showSuccessNotification('Entry deleted')
      )
      .catch((err) => {
        this.notificationService.showErrorNotification('Error occurred');
      });
  }

  editItem(item: any) {
    this.showMenuItemDialog(item);
  }
}
