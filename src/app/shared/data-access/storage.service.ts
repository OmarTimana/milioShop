import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItemBag } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  loadProducts(): Observable<ProductItemBag[]> {
    const rawProducts = localStorage.getItem('products');

    return of(rawProducts ? JSON.parse(rawProducts) : []);
  }

  saveProducts(products: ProductItemBag[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  loadFavorites(): Observable<ProductItemBag[]> {
    const rawFavorites = localStorage.getItem('favorites');
    return of(rawFavorites ? JSON.parse(rawFavorites) : []);
  }

  saveFavorites(favorites: ProductItemBag[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
