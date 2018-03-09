import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth0Service } from '../auth.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private authService: Auth0Service) {
  }
  canActivate() {
    return this.authService.isAuthenticated();
  }
}
