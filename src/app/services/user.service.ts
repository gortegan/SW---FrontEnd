import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../config/const';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
declare var require: any;
@Injectable()
export class UserService {
  swal = require('sweetalert2');
  constructor(
    public http: HttpClient,
  ) { }

  createUser(user: User) {

    const url = URL_SERVICE + '/registrar';
    console.log('Enviando usuario... a ' + url);
    return this.http.post(url, user).map((resp: User) => {
      if (user.active === 0) {
        swal('Ups!', 'El usuario introducido no es correcto. Vuelva a intentarlo', 'error');
      } else {
        swal('¡Confirmado!', 'Usuario creado correctamente', 'success');
      }
    });
  }
}
