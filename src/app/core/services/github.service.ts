import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private https = inject(HttpClient);

  constructor(private authService: AuthService) {}

  createGist(
    description: string,
    files: { [key: string]: { content: string } },
    isPublic: boolean = true
  ): Observable<any> {
    const payload = {
      description,
      public: isPublic,
      files,
    };
    console.log('payload', payload);

    // The HttpInterceptor will automatically add the proper Authorization header.
    return this.https.post('https://api.github.com/gists', payload);
  }
}
