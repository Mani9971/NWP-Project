import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEntryListComponent } from './pages/user-entry-list/user-entry-list.component';
import { UserEntriesComponent } from './user-entries.component';

const routes: Routes = [
  {
    path: '',
    component: UserEntriesComponent,
    children: [{ path: '', component: UserEntryListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEntriesRoutingModule {}
