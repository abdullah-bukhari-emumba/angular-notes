import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { GithubService } from '../github.service';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private readonly API_URL = 'https://api.github.com/gists';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private githubService: GithubService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this.authService.getGithubToken();
    return new HttpHeaders({
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    });
  }

  getPublicGists(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.API_URL}/public?page=${page}&per_page=${perPage}`);
  }

  getGistById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  getUserGists(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.API_URL}`, { headers });
  }

  createGist(gistData: any): Observable<any> {
    return this.githubService.createGist(
      gistData.description,
      gistData.files,
      gistData.public
    );
  }
}