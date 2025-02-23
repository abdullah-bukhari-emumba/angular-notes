import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  // constructor(private authService: AuthService) {}
  constructor() {}
  
  user$ = this.authService.getUser();
  showDropdown = false;

  ngOnInit() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  login() {
    this.authService.loginWithGitHub().then((result: any) => {
      console.log('Logged in with GitHub:', result);
    }).catch((error: any) => {
      console.error('Login error:', error);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Logged out');
    }).catch((error: any) => {
      console.error('Logout error:', error);
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  navigateTo(route: string, event: Event) {
    event.preventDefault();
    this.router.navigate([route]);
  }

  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown') && !target.closest('.user-photo')) {
      this.showDropdown = false;
    }
  }
}
