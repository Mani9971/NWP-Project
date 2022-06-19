import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guard/auth.guard';
import { SignInGuard } from './@core/guard/sign-in.guard';

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
    canActivate: [SignInGuard],
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./modules/restaurants/restaurants.module').then(
        (m) => m.RestaurantsModule
      ),
  },
  {
    path: 'user-entries',
    loadChildren: () =>
      import('./modules/user-entries/user-entries.module').then(
        (m) => m.UserEntriesModule
      ),
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
