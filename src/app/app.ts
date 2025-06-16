import { Component, signal } from '@angular/core';
import { ProductServiceTs } from './services/product.service';
import { Product } from './model/Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'smart-search-dashboard';
  searching = signal(false);
  recent = signal(['iPhone', 'Laptop', 'Camera']);
  products = signal<Product[]>([]);
  constructor(private service: ProductServiceTs) {}
  onSearch(term: string) {
    this.searching.set(true);

    const withoutDuplicate = this.recent().filter((item) => item != term);
    const updated = [term, ...withoutDuplicate].slice(0, 5);
    this.recent.set(updated);
    this.service.getProducts(term).subscribe((response) => {
      this.products.set(response.products);
      this.searching.set(false);
    });
  }

  onRecent(term: string) {
    this.onSearch(term);
  }

  ngOnDestory() {

  }
}
