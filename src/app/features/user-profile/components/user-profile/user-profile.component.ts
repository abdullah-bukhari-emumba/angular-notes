import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userGists = [
    {
      authorImage: 'assets/profile-pic.jpg',
      authorName: 'John Doe',
      name: 'vercel-monorepo',
      createdAt: '7 hours ago',
      code: `{
  "name": "vercel-monorepo",
  "version": "0.0.0",
  "private": true,
  "license": "Apache-2.0"
}`
    }
  ];
}
