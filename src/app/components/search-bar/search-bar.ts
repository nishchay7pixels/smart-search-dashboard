import {
  Component,
  Input,
  Output,
  signal,
  EventEmitter,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';
import { LoadingOverlay } from '../../shared/loading-overlay/loading-overlay';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar implements OnInit, OnDestroy {
  @Input() loading = signal(false);
  @Input() recentSearches = signal<string[]>([]);
  @Output() searchTerm = new EventEmitter<string>();
  @Output() recentSearchClicked = new EventEmitter<string>();
  @ViewChild('searchInput') searchBoxRef!: ElementRef<HTMLInputElement>;
  private searchInput$ = new Subject<string>();
  private sub!: Subscription;
  term = '';

  ngOnInit(): void {
    this.sub = this.searchInput$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((term) => {
        this.term = term;
      });
  }

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchInput$.next(value);
  }

  onRecentClick(term: string) {
    this.searchInput$.next(term);
    this.searchBoxRef.nativeElement.value = term;
    this.recentSearchClicked.emit(term);
    this.term = '';
  }

  onSearchClick(event: Event) {
    this.searchTerm.emit(this.term);
    this.term = '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
