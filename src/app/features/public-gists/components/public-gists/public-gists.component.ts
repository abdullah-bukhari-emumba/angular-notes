import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { GistsService } from '../../../../core/services/api/gist.service';

import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-public-gists',
  standalone: false,
  templateUrl: './public-gists.component.html',
  styleUrls: ['./public-gists.component.css'],
})
export class PublicGistsComponent implements OnInit {
  gists: any[] = [];
  totalRecords: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;

  starIcon = faStar;
  forkIcon = faCodeFork;

  gistsList: any[] = [];
  @Output() forkGist = new EventEmitter<string>();
  @Output() starGist = new EventEmitter<string>();

  viewMode: 'table' | 'cards' = 'table';

  activeTabIndex: number = 0;

  isLoading: boolean = false;

  totalPages: number = 100; // GitHub's max pages

  gistIdentifier(index: number, gist: any) {
    return gist.id;
  }

  constructor(private http: HttpClient, private gistsService: GistsService, private router: Router) {}

  ngOnInit() {
    this.loadGists(1);
  }

  loadGists(page: number) {
    this.isLoading = true;
    this.currentPage = page;

    this.gistsService.getPublicGists(page, this.pageSize)
      .subscribe({
        next: (data: any) => {
          this.gists = data;
          this.gistsList = data;
          this.totalRecords = 1000;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading gists:', error);
          this.isLoading = false;
        }
      });
  }

  onTabChange(event: number) {
    this.activeTabIndex = event;
  }

  onPageChange(event: any) {
    const newPage = event.page + 1;
    this.loadGists(newPage);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  navigateToGistDetails(gistId: string) {
    this.router.navigate(['/gist', gistId]);
  }
}
