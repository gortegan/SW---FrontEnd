import { Response, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
declare var require: any;
@Injectable()
export class Auth0Service {
    token: any;
    swal = require('sweetalert2');
    constructor(
      private http: Http,
      private authHttp: AuthHttp,
      private router: Router
    ) { }

    login(username: string, password: string) {

      return this.http.post('http://localhost:8080/login', {username: username, password: password})
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

    logout(): void {
      console.log('eliminando token..');
      localStorage.removeItem('user_token');

    }
}
