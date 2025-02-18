import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gist-card',
  standalone: false,
  templateUrl: './gist-card.component.html',
  styleUrl: './gist-card.component.css'
})
export class GistCardComponent {
  @Input() authorImage: string = '';
  @Input() authorName: string = '';
  @Input() gistName: string = '';
  @Input() createdAt: string = '';
  @Input() code: string = '';
}
