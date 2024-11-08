import { Injectable, Signal, inject } from '@angular/core';
import { ProductItemBag } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { Observable, map } from 'rxjs';

interface State {
  products: ProductItemBag[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BagStateService {
  private _storageService = inject(StorageService);

  private initialState: State = {
    products: [],
    loaded: false,
  };

  // Carga los productos desde el almacenamiento local
  loadProducts$ = this._storageService
    .loadProducts()
    .pipe(map((products) => ({ products, loaded: true })));

  // Define el estado de la bolsa utilizando signalSlice
  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts$],
    selectors: (state) => ({
      count: () =>
        state().products.reduce((acc, product) => acc + product.quantity, 0),
      price: () => {
        return state().products.reduce(
          (acc, product) => acc + product.product.price * product.quantity,
          0,
        );
      },
    }),
    actionSources: {
      add: (state, action$: Observable<ProductItemBag>) =>
        action$.pipe(map((product) => this.add(state, product))),
      remove: (state, action$: Observable<number>) =>
        action$.pipe(map((id) => this.remove(state, id))),
      udpate: (state, action$: Observable<ProductItemBag>) =>
        action$.pipe(map((product) => this.update(state, product))),
    },
    effects: (state) => ({
      load: () => {
        if (state().loaded) {
          this._storageService.saveProducts(state().products);
        }
      },
    }),
  });

  // Método privado para agregar un producto a la bolsa
  private add(state: Signal<State>, product: ProductItemBag) {
    const isInBag = state().products.find(
      (productInBag) => productInBag.product.id === product.product.id,
    );

    if (!isInBag) {
      return {
        products: [...state().products, { ...product, quantity: 1 }],
      };
    }

    isInBag.quantity += 1;
    return {
      products: [...state().products],
    };
  }

  // Método privado para eliminar un producto de la bolsa
  private remove(state: Signal<State>, id: number) {
    return {
      products: state().products.filter((product) => product.product.id !== id),
    };
  }

  // Método privado para actualizar la cantidad de un producto en la bolsa
  private update(state: Signal<State>, product: ProductItemBag) {
    const products = state().products.map((productInBag) => {
      if (productInBag.product.id === product.product.id) {
        return { ...productInBag, quantity: product.quantity };
      }

      return productInBag;
    });

    return { products };
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductItemBag } from '../interfaces/product.interface';

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
