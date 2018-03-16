import { ChartsModule } from 'ng2-charts';
import { USER_ROUTES } from './user.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LineComponent } from './charts/line/line.component';
import { BarComponent } from './charts/bar/bar.component';
import { DoughnutComponent } from './charts/doughnut/doughnut.component';
import { MyhomepageComponent } from './myhomepage/myhomepage.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { ChatsComponent } from './chats/chats.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule,
    USER_ROUTES,
    ChartsModule
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    LineComponent,
    BarComponent,
    DoughnutComponent,
    MyhomepageComponent,
    AccountsettingsComponent,
    ChatsComponent,
    StatsComponent,
  ]
})
export class UserModule { }
