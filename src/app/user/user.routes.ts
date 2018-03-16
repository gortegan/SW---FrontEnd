import { ChatsComponent } from './chats/chats.component';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { UserComponent } from './user.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { StatsComponent } from './stats/stats.component';


const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {path: 'profile', component: ProfileComponent, data: {titulo : 'Profile' } },
      {path: 'homepage', component: MyhomepageComponent, data: {titulo : 'My home page' } },
      {path: 'stats', component: StatsComponent, data: {titulo : 'stats' } },
      {path: 'chats', component: ChatsComponent, data: {titulo : 'Chats' } },
      {path: 'account', component: AccountsettingsComponent, data: {titulo : 'Account settings' } },
    ]
  }
];

export const USER_ROUTES = RouterModule.forChild(userRoutes);
