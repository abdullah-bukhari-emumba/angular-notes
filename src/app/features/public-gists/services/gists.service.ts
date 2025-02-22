// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class GistsService {
//   private readonly API_URL = 'https://api.github.com/gists/public';

//   constructor(private http: HttpClient) {}

//   getPublicGists(page: number, perPage: number): Observable<any> {
//     return this.http.get(`${this.API_URL}?page=${page}&per_page=${perPage}`);
//   }
// } 