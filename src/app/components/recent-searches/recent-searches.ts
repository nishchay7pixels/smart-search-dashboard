import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  standalone: false,
  templateUrl: './recent-searches.html',
  styleUrl: './recent-searches.css',
})
export class RecentSearches {
  @Input() recentSearches: string[] = [];
  @Output() onRecentClick = new EventEmitter<string>();

  onRecent(term: string) {
    this.onRecentClick.emit(term);
  }
}
