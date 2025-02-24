import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateGistRoutingModule } from './create-gist-routing.module';
import { CreateGistComponent } from './components/create-gist/create-gist.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CreateGistComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateGistRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class CreateGistModule { }
