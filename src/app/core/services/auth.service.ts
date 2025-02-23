import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGitHub() {
    return this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout() {
    return this.afAuth.signOut();
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