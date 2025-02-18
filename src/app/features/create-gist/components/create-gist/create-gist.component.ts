import { Component } from '@angular/core';

@Component({
  selector: 'app-create-gist',
  standalone: false,
  templateUrl: './create-gist.component.html',
  styleUrl: './create-gist.component.css'
})
export class CreateGistComponent {
  // Form handling will be implemented later
  onSubmit() {
    console.log('Create gist submitted');
  }
}
