import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public Auth: AuthServiceService) {
  }

  ngOnInit() {
  }

  logout() {
    this.Auth.logout();
  }
  login() {
    this.Auth.login();
  }


}
