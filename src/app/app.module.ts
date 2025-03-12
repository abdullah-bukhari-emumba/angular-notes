import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicGistsModule } from './features/public-gists/public-gists.module';
import { GistDetailsModule } from './features/gist-details/gist-details.module';
import { CreateGistModule } from './features/create-gist/create-gist.module';
import { UserProfileModule } from './features/user-profile/user-profile.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../../environment';
import { httpInterceptor } from './core/interceptors/http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    CoreModule,
    SharedModule,
    PublicGistsModule,
    GistDetailsModule,
    CreateGistModule,
    UserProfileModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor]))]
  ,
  bootstrap: [AppComponent],
})
export class AppModule { }
