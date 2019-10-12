import * as firebase from 'firebase';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string)  {
     this.Users = this.db.object('/users/' + uid).valueChanges();

  }

}
