import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceTs {
  constructor(private http: HttpClient) {}

  getProducts(term: string): Observable<any> {
    return this.http.get('https://dummyjson.com/products/search?q=' + term);
  }
}
