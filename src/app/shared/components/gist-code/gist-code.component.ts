import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gist-code',
  standalone: false,
  templateUrl: './gist-code.component.html',
  styleUrls: ['./gist-code.component.css']
})
export class GistCodeComponent {
  @Input() code: string = '';
}
