import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { PUBLIC_ROUTES } from './public.routes';
import { PublicComponent } from './public.component';
import { Auth0Service } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PUBLIC_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    PublicComponent
  ], providers: [
  ]
})
export class PublicModule { }
