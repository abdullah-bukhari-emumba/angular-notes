import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicGistsComponent } from './components/public-gists/public-gists.component';
import { SharedModule } from '../../shared/shared.module';
import { PublicGistsRoutingModule } from './public-gists-routing.module';

@NgModule({
  declarations: [
    PublicGistsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicGistsRoutingModule
  ]
})
export class PublicGistsModule { }
