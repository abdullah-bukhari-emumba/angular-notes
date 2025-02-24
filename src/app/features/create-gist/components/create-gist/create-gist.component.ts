import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GistsService } from '../../../../core/services/api/gist.service';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

interface GistFile {
  filename: string;
  content: string;
}

@Component({
  selector: 'app-create-gist',
  standalone: false,
  templateUrl: './create-gist.component.html',
  styleUrl: './create-gist.component.css'
})
export class CreateGistComponent implements OnInit {
  gistForm: FormGroup;
  isSubmitting = false;
  plusIcon = faPlus;
  removeIcon = faTimes;

  constructor(
    private fb: FormBuilder,
    private gistsService: GistsService,
    private router: Router
  ) {
    this.gistForm = this.fb.group({
      description: ['', [Validators.required]],
      files: this.fb.array([this.createFileFormGroup()])
    });
  }

  ngOnInit(): void {}

  get files(): FormArray {
    return this.gistForm.get('files') as FormArray;
  }

  createFileFormGroup(): FormGroup {
    return this.fb.group({
      filename: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  addFile(): void {
    this.files.push(this.createFileFormGroup());
  }

  removeFile(index: number): void {
    if (this.files.length > 1) {
      this.files.removeAt(index);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.gistForm.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    const formValue = this.gistForm.value;
    
    try {
      const filesMap: { [key: string]: { content: string } } = {};
      formValue.files.forEach((file: GistFile) => {
        filesMap[file.filename] = { content: file.content };
      });

      const gistData = {
        description: formValue.description,
        public: true,
        files: filesMap
      };

      await this.gistsService.createGist(gistData).toPromise();
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Error creating gist:', error);
      if (error.message === 'Authentication required to create a gist') {
        alert('Please login to create a gist');
        this.router.navigate(['/login']);
      } else if (error.status === 422) {
        alert('Invalid gist data. Please check your inputs.');
      } else {
        alert('Failed to create gist. Please try again.');
      }
    } finally {
      this.isSubmitting = false;
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
