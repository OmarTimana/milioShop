import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { Category, Product } from '../../shared/interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService extends BaseHttpService {
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/?&offset=0&limit=12`, {
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/?&offset=0&limit=7`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getProductsByCategory(categoryId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/products/?categoryId=${categoryId}&offset=0&limit=12`);
  }
}
