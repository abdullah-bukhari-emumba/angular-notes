import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private githubToken = new BehaviorSubject<string | null>(null);
  githubToken$ = this.githubToken.asObservable();

  constructor(private afAuth: AngularFireAuth) {
    // Check localStorage on initialization
    const token = localStorage.getItem('github_token');
    if (token) {
      this.githubToken.next(token);
    }
  }

  async loginWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('gist'); 
    const result = await this.afAuth.signInWithPopup(provider);
    const credential = result.credential as firebase.auth.OAuthCredential;
    const token = credential.accessToken;
  
    if (token) {
      localStorage.setItem('github_token', token);
      this.githubToken.next(token);
    }
    
    return result;
  }
  

  logout() {
    localStorage.removeItem('github_token');
    this.githubToken.next(null);
    return this.afAuth.signOut();
  }

  getGithubToken(): string | null {
    return this.githubToken.value;
  }

  getUser() {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          const userInfo = user.providerData[0] as (firebase.UserInfo & { html_url?: string });
          return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            html_url: userInfo.html_url || ''
          };
        }
        return null;
      })
    );
  }
}