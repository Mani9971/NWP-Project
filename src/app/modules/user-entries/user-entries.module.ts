import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';
import { UserEntriesRoutingModule } from './user-entries-routing.module';
import { UserEntriesComponent } from './user-entries.component';

@NgModule({
  declarations: [UserEntriesComponent, UserEntryListComponent],
  imports: [
    CommonModule,
    UserEntriesRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
  ],
})
export class UserEntriesModule {}
