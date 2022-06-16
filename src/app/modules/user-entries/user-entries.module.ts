import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEntriesRoutingModule } from './user-entries-routing.module';
import { UserEntriesComponent } from './user-entries.component';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';


@NgModule({
  declarations: [
    UserEntriesComponent,
    UserEntryListComponent
  ],
  imports: [
    CommonModule,
    UserEntriesRoutingModule
  ]
})
export class UserEntriesModule { }
