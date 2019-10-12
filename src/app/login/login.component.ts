import * as firebase from 'firebase/app';

import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../auth-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(public Auth: AuthServiceService) {
    this.user$ = this.Auth.user$;
   }


  ngOnInit() {
  }

  login() {
    this.Auth.login();
  }


}
