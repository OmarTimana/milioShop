import { Injectable, inject } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { map } from 'rxjs';
import { Category } from '../../shared/interfaces/product.interface';

interface State {
  categories: Category[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class CategoriesStateService {

  private categoriesService = inject(ProductsService);

  private initialState: State = {
    categories: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
        this.categoriesService.getCategories().pipe(map(categories => ({ categories, status: 'success' as const }))),
    ],
  });
}
