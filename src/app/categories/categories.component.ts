import { Component, inject } from '@angular/core';
import { SpinnerComponent } from '../products/ui/spinner/spinner.component';
import { CategoriesTableComponent } from './ui/categories-table/categories-table.component';
import { CategoriesStateService } from './data-access/categories-state.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SpinnerComponent, CategoriesTableComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  providers: [CategoriesStateService]
})
export default class CategoriesComponent {

  categoriesState = inject(CategoriesStateService);

}
