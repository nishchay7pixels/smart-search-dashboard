import { Component, signal } from '@angular/core';
import { ProductServiceTs } from './services/product.service';
import { Product } from './model/Product';
import {
  isLoading,
  recentSearches,
  searchResults,
  searchTerm
} from './state/search.signal';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'smart-search-dashboard';
  searchTerm = searchTerm;
  recentSearches = recentSearches;
  searchResults = searchResults;
  isLoading = isLoading;
  constructor(private service: ProductServiceTs) {}
  onSearch(term: string) {
    isLoading.set(true);

    const withoutDuplicate = recentSearches().filter((item) => item != term);
    const updated = [term, ...withoutDuplicate].slice(0, 5);
    this.recentSearches.set(updated);
    this.service.getProducts(term).subscribe((response) => {
      this.searchResults.set(response.products);
      this.isLoading.set(false);
    });
  }

  onRecent(term: string) {
    this.onSearch(term);
  }

  ngOnDestory() {}
}
