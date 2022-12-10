import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, AllProductsResponse } from '../models/products.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<AllProductsResponse>(`${this.apiUrl}/products`).pipe(
      map((response) => {
        return response.products;
      })
    );
  }
}
