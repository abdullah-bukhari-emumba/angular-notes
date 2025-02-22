import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGistsComponent } from './components/public-gists/public-gists.component';

const routes: Routes = [{ path: '', component: PublicGistsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicGistsRoutingModule {}
