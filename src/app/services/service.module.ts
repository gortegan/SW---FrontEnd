import { HttpModule } from '@angular/http';
import { UsuarioService } from './usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth0Service } from './auth.service';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [

  ], providers: [
    AuthHttp,
    provideAuth({
        headerName: 'Authorization',
        headerPrefix: 'bearer',
        tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('id_token')),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        noJwtError: true
    }),
    Auth0Service,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
