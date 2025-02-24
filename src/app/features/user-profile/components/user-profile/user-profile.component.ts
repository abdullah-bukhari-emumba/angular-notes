import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { GistsService } from '../../../../core/services/api/gist.service';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userGists: any[] = [];
  isLoading = true;
  user: any = null;
  gistsCount = 0;
  followersCount = 0;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private gistsService: GistsService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.isLoading = true;
    this.error = null;

    this.authService.getUser().pipe(
      tap(user => {
        this.user = user;
        if (!user) {
          this.error = 'User not authenticated';
          this.isLoading = false;
        }
      }),
      switchMap(user => {
        if (!user) return of(null);
        
        // Get user's GitHub username from the authenticated user
        const username = user.displayName || '';
        
        // Fetch user's gists and additional profile data
        return forkJoin({
          gists: this.gistsService.getUserGists().pipe(
            catchError(err => {
              console.error('Error fetching user gists:', err);
              return of([]);
            })
          ),
          // You could add additional API calls here if needed
          // For example, to get followers count or other profile data
        });
      }),
      catchError(err => {
        console.error('Error in profile data loading:', err);
        this.error = 'Failed to load profile data';
        this.isLoading = false;
        return of(null);
      })
    ).subscribe(result => {
      if (result) {
        this.userGists = result.gists;
        this.gistsCount = this.userGists.length;
        
        // If you had additional API calls, you could set more properties here
        // this.followersCount = result.followers.length;
      }
      this.isLoading = false;
    });
  }

  // Helper method to get the first file content from a gist
  getFirstFileContent(gist: any): string {
    if (!gist || !gist.files) return 'No content available';
    
    const fileKeys = Object.keys(gist.files);
    if (fileKeys.length === 0) return 'No content available';
    
    return gist.files[fileKeys[0]]?.content || 'Click to view code';
  }
}
