import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-price-list-table',
  templateUrl: './price-list-table.component.html',
  styleUrls: ['./price-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListTableComponent implements OnInit {
  @Input() data: any = {};

  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  categories = [
    { label: 'Fast food', value: 'fast food' },
    { label: 'Hamburgers', value: 'hamburgers' },
    { label: 'Grill', value: 'grill' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Soup', value: 'soup' },
  ];

  constructor() {}

  deletePressed(itemId: string) {
    this.onDelete.emit(itemId);
  }

  editPressed(item: any) {
    this.onEdit.emit(item);
  }

  ngOnInit(): void {}
}
