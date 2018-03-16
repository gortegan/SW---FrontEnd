import { Auth0Service } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _authService: Auth0Service) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }
}
