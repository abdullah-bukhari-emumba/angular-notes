import { Component } from '@angular/core';

@Component({
  selector: 'app-public-gists',
  standalone: false,
  templateUrl: './public-gists.component.html',
  styleUrls: ['./public-gists.component.css']
})
export class PublicGistsComponent {
  gists = [
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
    },
    {
      authorImage: 'assets/profile-pic.jpg',
      authorName: 'John Doe',
      name: 'react-components',
      createdAt: '2 days ago',
      code: `const App = () => {
  return <div>Hello World</div>;
}`
    }
  ];
}
