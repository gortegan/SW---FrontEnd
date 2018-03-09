import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario.model';
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
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    initPlugins();
    this.formulario = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      pass2: new FormControl(null, Validators.required),
      condiciones: new FormControl( false )
    });
    this.formulario.setValue({
      usuario: 'user',
      nombre: 'Test',
      apellido: 'Test',
      correo: 'test@test.com',
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
      const usuario = new Usuario(
        this.formulario.value.usuario,
        this.formulario.value.nombre,
        this.formulario.value.apellido,
        this.formulario.value.correo,
        this.formulario.value.pass
    );
    // Enviar petición al servicio
    this._usuarioService.registrarUsuario(usuario)
    .subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
