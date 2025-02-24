import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { authGuard } from './core/guards/auth.guard';
import { UnauthorizedComponent } from './core/components/unauthorized/unauthorized.component';
import { authGuard } from './core/guards/auth.guard';

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
    path: 'create-gist',
    loadChildren: () =>
      import('./features/create-gist/create-gist.module').then(
        (m) => m.CreateGistModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./features/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
