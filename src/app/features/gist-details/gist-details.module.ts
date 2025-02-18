import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistDetailsRoutingModule } from './gist-details-routing.module';
import { GistDetailsComponent } from './components/gist-details/gist-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    GistDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GistDetailsRoutingModule
  ]
})
export class GistDetailsModule { }
