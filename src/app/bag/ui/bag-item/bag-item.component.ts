import { Component, input, output } from '@angular/core';
import { ProductItemBag } from '../../../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-bag-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './bag-item.component.html',
  styleUrl: './bag-item.component.scss',
})
export class BagItemComponent {
  productBagItem = input.required<ProductItemBag>();

  onRemove = output<number>();

  onIncrease = output<ProductItemBag>();

  onDecrease = output<ProductItemBag>();
}
