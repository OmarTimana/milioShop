import { Injectable, inject } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { UserService } from './profile.service';
import { map } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';

interface State {
  user: User | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class UserStateService {

  private UserService = inject(UserService);

  private initialState: State = {
    user: null,
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
        this.UserService.getUser().pipe(map(user => ({ user, status: 'success' as const }))),
    ],
  });
}