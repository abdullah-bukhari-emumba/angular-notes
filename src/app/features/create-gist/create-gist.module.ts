import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGistRoutingModule } from './create-gist-routing.module';
import { CreateGistComponent } from './components/create-gist/create-gist.component';


@NgModule({
  declarations: [
    CreateGistComponent
  ],
  imports: [
    CommonModule,
    CreateGistRoutingModule
  ]
})
export class CreateGistModule { }
