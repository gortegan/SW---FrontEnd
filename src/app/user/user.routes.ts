import { UserComponent } from './user.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';


const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {path: 'profile', component: ProfileComponent, data: {titulo : 'Profile' } },
    ]
  }
];

export const USER_ROUTES = RouterModule.forChild(userRoutes);
