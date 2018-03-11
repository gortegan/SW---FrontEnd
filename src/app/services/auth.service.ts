import { User } from './../models/user.model';
import { Response, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { URL_SERVICE } from '../config/const';
declare var require: any;
@Injectable()
export class Auth0Service {
    token: any;
    swal = require('sweetalert2');
    usuario: User;
    constructor(
      private http: Http,
      private authHttp: AuthHttp,
      private router: Router
    ) { }
    login(email: string, password: string) {

      return this.http.post('http://localhost:8080/login', {email: email, password: password})
        .subscribe((response: Response) => {
          this.token = response.headers.get('Authorization');
          if (this.token) {
            localStorage.setItem('user_token', this.token);
            this.router.navigateByUrl('/user/profile');
          }
        }, error => {
          if (error.status === 403) {
            swal('Usuario incorrecto', 'Credenciales incorrectas, vuelva a intentarlo.', 'error');
          }
        });
    }

    getToken(): String {
      const token = localStorage.getItem('user_token');
      return token ? token : '';
    }

    isAuthenticated(): boolean {
      return this.getToken().length > 10;
    }

    loginGoogle(token) {
    const url = URL_SERVICE + '/login/google';
    return this.http.post(url, {token: token})
          .map( (resp: any) => {
            localStorage.setItem('user_token', token);
            localStorage.removeItem('user');
            return true;
          });
    }

    logout(): void {
      localStorage.removeItem('user_token');
    }
}
