import { map, switchMap } from 'rxjs/operators';

import { AppUser } from './models/app-user';
import { AuthServiceService } from './auth-service.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {


  constructor( private auth: AuthServiceService, private userService: UserService ) {
   }

    canActivate(): Observable<boolean> {

    return  this.auth.user$.pipe(
        switchMap(user =>
              // this.userService.get(user.uid);
                this.userService.Users
       )).pipe( map( appUser => appUser.isAdmin ));
    }



}
