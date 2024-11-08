import { Component, input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {

  category = input.required<Category>();

  
  @Output() 
  categorySelected: EventEmitter<number> = new  EventEmitter<number>;
  

  filterCategory(e: any) {
    console.log('Category selected: ', e);
    this.categorySelected.emit(e);
  }

}
