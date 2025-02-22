import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GistsService {
  private readonly API_URL = 'https://api.github.com/gists';

  constructor(private http: HttpClient) {}

  getPublicGists(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.API_URL}/public?page=${page}&per_page=${perPage}`);
  }

  getGistById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}