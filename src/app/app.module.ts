import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicGistsModule } from './features/public-gists/public-gists.module';
import { GistDetailsModule } from './features/gist-details/gist-details.module';
import { CreateGistModule } from './features/create-gist/create-gist.module';
import { UserProfileModule } from './features/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PublicGistsModule,
    GistDetailsModule,
    CreateGistModule,
    UserProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
