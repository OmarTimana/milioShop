import { Injectable, inject } from '@angular/core';
import { Category } from '../../shared/interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { CategoriesService } from './categories.service';
import { map } from 'rxjs';

interface State {
  categories: Category[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class CategoriesStateService {

  private categoriesService = inject(CategoriesService);

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

