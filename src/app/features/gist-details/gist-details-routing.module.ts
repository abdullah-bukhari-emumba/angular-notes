import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GistDetailsComponent } from './components/gist-details/gist-details.component';

const routes: Routes = [{ path: '', component: GistDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GistDetailsRoutingModule { }
