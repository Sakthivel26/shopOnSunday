import { AuthServiceService } from './auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopOnSunday';

  constructor(private auth: AuthServiceService, private route: Router,
              private users: UserService ) {
    auth.user$.subscribe(
    user => {
      if (user) {
        users.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        route.navigateByUrl(returnUrl);
      }
    }
    );
  }

}
