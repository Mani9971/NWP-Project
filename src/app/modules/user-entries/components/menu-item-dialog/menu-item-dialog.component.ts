import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-menu-item-dialog',
  templateUrl: './menu-item-dialog.component.html',
  styleUrls: ['./menu-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemDialogComponent implements OnInit {
  formGroup: FormGroup;
  categories = [
    { label: 'Fast food', value: 'fast food' },
    { label: 'Hamburgers', value: 'hamburgers' },
    { label: 'Grill', value: 'grill' },
    { label: 'Pizza', value: 'pizza' },
    { label: 'Dessert', value: 'dessert' },
    { label: 'Soup', value: 'soup' },
  ];
  data$: any = {};

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef) {
    this.formGroup = fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['fast food', Validators.required],
      info: [''],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    console.log('formGroup...', this.formGroup.value);
    this.ref.close(this.formGroup.value);
  }
}
