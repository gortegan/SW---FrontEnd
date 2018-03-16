import { Component, OnInit } from '@angular/core';
declare function initPlugins();
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initPlugins();
  }

}
