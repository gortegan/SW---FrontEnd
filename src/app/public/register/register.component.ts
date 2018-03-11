import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function initPlugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    public _userService: UserService
  ) { }

  ngOnInit() {
    initPlugins();
    this.formulario = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      pass2: new FormControl(null, Validators.required),
      condiciones: new FormControl( false )
    });
    this.formulario.setValue({
      name: 'Test',
      lastname: 'Test',
      email: 'test@test.com',
      pass: '123456',
      pass2: '123456',
      condiciones: true
    });
  }
  registrarUsuario() {
    if (this.formulario.invalid) {
      console.log('Registro no válido');
      return;
    }
      const usuario = new User(
        this.formulario.value.name,
        this.formulario.value.lastname,
        this.formulario.value.email,
        this.formulario.value.pass
    );
    // Enviar petición al servicio
    this._userService.createUser(usuario)
    .subscribe((resp: any) => {
    });
  }

}
