import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GistsService } from '../../../../core/services/api/gist.service';

@Component({
  selector: 'app-gist-details',
  standalone: false,
  templateUrl: './gist-details.component.html',
  styleUrl: './gist-details.component.css'
})
export class GistDetailsComponent implements OnInit {
  gist: any;
  gistCode: string = '';
  @Output() forkGist = new EventEmitter<string>();
  @Output() starGist = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private gistsService: GistsService) {}

  ngOnInit() {
    const gistId = this.route.snapshot.paramMap.get('id');
    if (gistId) {
      this.gistsService.getGistById(gistId).subscribe((data) => {
        this.gist = data;
        this.gistCode = JSON.stringify(data.files, null, 2);
      });
    }
  }
}
