import { USER_ROUTES } from './user.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    USER_ROUTES
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class UserModule { }
