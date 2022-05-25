import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseAuthUiComponent } from '../firebase-auth-ui/firebase-auth-ui.component';

const routes: Routes = [{ path: '', component: FirebaseAuthUiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
