import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistCardComponent } from './components/gist-card/gist-card.component';
import { GistCodeComponent } from './components/gist-code/gist-code.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    GistCardComponent,
    GistCodeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    GistCardComponent,
    GistCodeComponent
  ]
})
export class SharedModule { }
