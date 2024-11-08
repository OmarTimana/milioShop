import { Component, inject } from '@angular/core';
import { FavoritesStateService } from '../products/data-access/favorites-state.service';
import { FavoriteItemComponent } from './ui/favorite-item/favorite-item.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [  ],
  templateUrl: './favorites.component.html',
  styles: ``,
})
export default class FavoritesComponent {

}
