import { Component, inject, input } from '@angular/core';
import { UserStateService } from './data-access/profile-status.service';
import { SpinnerComponent } from '../products/ui/spinner/spinner.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [UserStateService]
})
export default class ProfileComponent {

  userState = inject(UserStateService);

} 
