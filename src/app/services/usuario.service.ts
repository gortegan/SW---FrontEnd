import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../config/const';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
declare var require: any;
@Injectable()
export class UsuarioService {
  swal = require('sweetalert2');
  constructor(
    public http: HttpClient,
  ) { }

  registrarUsuario(usuario: Usuario) {

    const url = URL_SERVICE + '/registrar';
    console.log('Enviando usuario... a ' + url);
    return this.http.post(url, usuario).map((resp: Usuario) => {
      if (usuario) {
        swal('¡Confirmado!', 'Usuario creado correctamente', 'success');
      } else {
        swal('Ups!', 'Ha habido un error en la creación del usuario. Vuelva a intentarlo', 'error');
      }
    });
  }
}
