import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEntriesRoutingModule } from './user-entries-routing.module';
import { UserEntriesComponent } from './user-entries.component';


@NgModule({
  declarations: [
    UserEntriesComponent
  ],
  imports: [
    CommonModule,
    UserEntriesRoutingModule
  ]
})
export class UserEntriesModule { }
