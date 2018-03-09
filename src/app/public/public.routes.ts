import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';


const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', component: HomeComponent, data: {titulo : 'Home' } },
      {path: 'login', component: LoginComponent, data: {titulo : 'Login' } },
      {path: 'register', component: RegisterComponent, data: {titulo : 'Sign up' } },
      {path: '**', component: PagenotfoundComponent, data: {titulo : '404' } },
    ]
  }
];

export const PUBLIC_ROUTES = RouterModule.forChild(publicRoutes);
