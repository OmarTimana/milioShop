import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { Category } from '../../shared/interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseHttpService {

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

}
