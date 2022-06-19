import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

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
  isEditMode = false;
  currentItemId = '';

  constructor(
    private fb: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef
  ) {
    this.formGroup = fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['fast food', Validators.required],
      info: [''],
    });
  }

  ngOnInit(): void {
    let data = this.config.data?.data;
    if (data) {
      this.isEditMode = true;
      this.currentItemId = data.id;
      this.formGroup.patchValue(data);
    }
  }

  submitForm() {
    console.log('formGroup...', this.formGroup.value);
    this.ref.close({
      editMode: this.isEditMode,
      data: { id: this.currentItemId, ...this.formGroup.value },
    });
  }
}
