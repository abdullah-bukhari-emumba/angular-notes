import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGistComponent } from './components/create-gist/create-gist.component';

const routes: Routes = [{ path: '', component: CreateGistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateGistRoutingModule { }
