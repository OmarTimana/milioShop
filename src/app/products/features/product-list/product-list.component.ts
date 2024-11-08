import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { BagStateService } from '../../../shared/data-access/bag-state.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { CategoryCardComponent } from '../../ui/category-card/category-card.component';
import { SpinnerComponent } from '../../ui/spinner/spinner.component';
import { CategoriesStateService } from '../../data-access/categories-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CategoryCardComponent, SpinnerComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsStateService, CategoriesStateService],
})
export default class ProductListComponent {

  categoryId: number = 0;

  setCategory(e: any) {
    this.categoryId = e;
  }

  productsState = inject(ProductsStateService);
  categoriesState = inject(CategoriesStateService);

  bagState = inject(BagStateService).state;

  addToBag(product: Product) {
    this.bagState.add({
      product,
      quantity: 1,
    });
  }
}
