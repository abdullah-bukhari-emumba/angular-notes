import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicGistsComponent } from './components/public-gists/public-gists.component';
import { SharedModule } from '../../shared/shared.module';
import { PublicGistsRoutingModule } from './public-gists-routing.module';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    PublicGistsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicGistsRoutingModule,
    TableModule,
    PaginatorModule,
    TabViewModule,
    FontAwesomeModule,
  ]
})
export class PublicGistsModule { }
