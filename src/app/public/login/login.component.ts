import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function initPlugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  auth2: any;
  constructor(public _authService: Auth0Service) { }

  ngOnInit() {
    initPlugins();
    this.googleInit();
    this.formulario = new FormGroup({
      email: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      recuerdame: new FormControl( false )
    });
    if (localStorage.getItem('email')) {
      this.formulario.setValue({
        email: localStorage.getItem('email'),
        pass: '',
        recuerdame: true
      });
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '275008617646-isldmdlgopsoqhqlrl75phspbb6mlg3r.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));

    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      // let profile = googleUser.getBasicProfile();
      const token: string = googleUser.getAuthResponse().id_token;
      this._authService.loginGoogle(token)
      .subscribe(() => window.location.href = '#/user/profile' );
    });
  }

  login() {
    if (this.formulario.value.recuerdame) {
      localStorage.setItem('email', this.formulario.value.email);
    } else {
      if (localStorage.getItem('email')) {
        localStorage.removeItem('email');
      }
    }
    this._authService.login(this.formulario.value.email, this.formulario.value.pass);
}
}
