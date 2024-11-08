import { Component, inject } from '@angular/core';
import { BagItemComponent } from './ui/bag-item/bag-item.component';
import { BagStateService } from '../shared/data-access/bag-state.service';
import { ProductItemBag } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [BagItemComponent, CurrencyPipe],
  templateUrl: './bag.component.html',
  styles: ``,
})
export default class BagComponent {
  // Inyecta el servicio de estado de la bolsa
  state = inject(BagStateService).state;

  // Método para eliminar un producto de la bolsa
  onRemove(id: number) {
    this.state.remove(id);
  }

  // Método para aumentar la cantidad de un producto en la bolsa
  onIncrease(product: ProductItemBag) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  // Método para disminuir la cantidad de un producto en la bolsa
  onDecrease(product: ProductItemBag) {
    this.state.udpate({
      ...product,
      quantity: product.quantity - 1,
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // Carga los productos desde el almacenamiento local
  loadProducts(): Observable<ProductItemBag[]> {
    const rawProducts = localStorage.getItem('products');
    return of(rawProducts ? JSON.parse(rawProducts) : []);
  }

  // Guarda los productos en el almacenamiento local
  saveProducts(products: ProductItemBag[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  // Carga los productos favoritos desde el almacenamiento local
  loadFavorites(): Observable<ProductItemBag[]> {
    const rawFavorites = localStorage.getItem('favorites');
    return of(rawFavorites ? JSON.parse(rawFavorites) : []);
  }

  // Guarda los productos favoritos en el almacenamiento local
  saveFavorites(favorites: ProductItemBag[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
