import { Component, inject } from '@angular/core';
import { BagItemComponent } from './ui/bag-item/bag-item.component';
import { BagStateService } from '../shared/data-access/bag-state.service';
import { ProductItemBag } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [BagItemComponent, CurrencyPipe],
  templateUrl: './bag.component.html',
  styles: ``,
})
export default class BagComponent {
  
  state = inject(BagStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onIncrease(product: ProductItemBag) {
    this.state.udpate({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }

  onDecrease(product: ProductItemBag) {
    this.state.udpate({
      ...product,
      quantity: product.quantity - 1,
    });
  }
}
