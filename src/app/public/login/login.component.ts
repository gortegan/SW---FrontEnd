import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function initPlugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(public _authService: Auth0Service) { }

  ngOnInit() {
    initPlugins();
    this.formulario = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      recuerdame: new FormControl( false )
    });
  }

  login() {
    this._authService.login(this.formulario.value.usuario, this.formulario.value.pass);
}
}
