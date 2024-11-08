import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailSateService } from '../../data-access/proudct-detail-state.service';
import { BagStateService } from '../../../shared/data-access/bag-state.service';
import { SpinnerComponent } from "../../ui/spinner/spinner.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [SpinnerComponent, RouterLink],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailSateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailSateService).state;
  bagState = inject(BagStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  addToBag() {
    this.bagState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}
