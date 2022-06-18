import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  templateUrl: './restaurant-add-and-edit.component.html',
  styleUrls: ['./restaurant-add-and-edit.component.scss'],
  providers: [MessageService],
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
  constructor() {}

  ngOnInit(): void {}
}
