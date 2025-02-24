import { inject, Injectable } from '@angular/core';
import { Octokit } from 'octokit';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private octokit: Octokit | null = null;

  private https = inject(HttpClient);

  constructor(private authService: AuthService, http: HttpClient) {
    this.initOctokit();

    // Subscribe to token changes
    this.authService.githubToken$.subscribe((token) => {
      this.initOctokit();
    });
  }

  private initOctokit() {
    const token = this.authService.getGithubToken();
    if (token) {
      this.octokit = new Octokit({
        auth: token,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
    } else {
      this.octokit = null;
    }
  }

  createGist(
    description: string,
    files: { [key: string]: { content: string } },
    isPublic: boolean = true
  ): Observable<any> {
    if (!this.octokit) {
      throw new Error('Authentication required to create a gist');
    }
    let payload: any = {
      description,
      public: isPublic,
      files,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${localStorage.getItem('github_token')}`,
      },
    };
    console.log('payload', payload);

    return from(this.octokit.request('POST /gists', payload));
  }
}
