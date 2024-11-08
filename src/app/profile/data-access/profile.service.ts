import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { User} from '../../shared/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseHttpService {

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/1`, {
    });
  }

}
