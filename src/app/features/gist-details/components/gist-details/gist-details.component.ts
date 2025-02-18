import { Component } from '@angular/core';

@Component({
  selector: 'app-gist-details',
  standalone: false,
  templateUrl: './gist-details.component.html',
  styleUrl: './gist-details.component.css'
})
export class GistDetailsComponent {
  gistCode = `{
  "name": "vercel-monorepo",
  "version": "0.0.0",
  "private": true,
  "license": "Apache-2.0"
}`;
}
