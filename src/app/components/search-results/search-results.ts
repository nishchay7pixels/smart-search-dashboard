import { Component, Input } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-search-results',
  standalone: false,
  templateUrl: './search-results.html',
  styleUrl: './search-results.css',
})
export class SearchResults {
  @Input() products: Product[] = [];
}
