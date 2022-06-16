import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEntriesComponent } from './user-entries.component';

const routes: Routes = [{ path: '', component: UserEntriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEntriesRoutingModule { }
