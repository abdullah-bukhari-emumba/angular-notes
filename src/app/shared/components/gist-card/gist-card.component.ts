import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gist-card',
  standalone: false,
  templateUrl: './gist-card.component.html',
  styleUrl: './gist-card.component.css'
})
export class GistCardComponent {
  @Input() authorImage: any = '';
  @Input() authorName: any = '';
  @Input() gistName: any = '';
  @Input() createdAt: any = '';
  @Input() code: any = '';
  
  @Output() onFork = new EventEmitter<void>();
  @Output() onStar = new EventEmitter<void>();
  @Output() onCodeClick = new EventEmitter<void>();

  handleCodeClick() {
    this.onCodeClick.emit();
  }
}
