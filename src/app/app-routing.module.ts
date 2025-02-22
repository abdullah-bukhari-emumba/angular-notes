import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/public-gists/public-gists.module').then(
        (m) => m.PublicGistsModule
      ),
  },
  {
    path: 'gist/:id',
    loadChildren: () =>
      import('./features/gist-details/gist-details.module').then(
        (m) => m.GistDetailsModule
      ),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./features/create-gist/create-gist.module').then(
        (m) => m.CreateGistModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
