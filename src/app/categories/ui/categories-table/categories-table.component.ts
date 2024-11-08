import { Component, input } from '@angular/core';
import { Category } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [],
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.scss'
})
export class CategoriesTableComponent {
  categories = input.required<Category>();
}
