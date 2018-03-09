import { Auth0Service } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public _authService: Auth0Service) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }
}
