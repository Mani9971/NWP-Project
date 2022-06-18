import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  phone: string = '';
  email: string = '';

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.phone = this.config.data?.contact ?? 'No contact info';
    this.email = this.config.data?.email ?? '';
  }
}
