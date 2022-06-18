import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
@Component({
  selector: 'app-price-list-table',
  templateUrl: './price-list-table.component.html',
  styleUrls: ['./price-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListTableComponent implements OnInit {
  categories = [
    { label: 'Fast food', value: 'fast food' },
    { label: 'Hamburgers', value: 'hamburgers' },
    { label: 'Grill', value: 'grill' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Soup', value: 'soup' },
  ];

  @Input() data: any = {};
  constructor() {}

  ngOnInit(): void {}
}
