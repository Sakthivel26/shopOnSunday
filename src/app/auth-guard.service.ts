import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthServiceService, private route: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe( map (user => {
      if (user) { return true; }
      this.route.navigate(['/login'], {  queryParams: { returnUrl: state.url } });
      return false;
    }));

  }
}
