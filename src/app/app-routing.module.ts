import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/firebase-auth-ui/firebase-auth-ui.module').then(
        (m) => m.FirebaseAuthUiModule
      ),
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./modules/restaurants/restaurants.module').then(
        (m) => m.RestaurantsModule
      ),
  },
  { path: 'user-entries', loadChildren: () => import('./modules/user-entries/user-entries.module').then(m => m.UserEntriesModule) },

  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
