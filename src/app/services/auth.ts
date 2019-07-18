import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Events } from '@ionic/angular';
import {AmplifyService, AuthState} from 'aws-amplify-angular/dist/src/providers';
import {Analytics, Auth} from 'aws-amplify';

@Injectable()
export class AuthService implements CanActivate {

  signedIn = false;
  user = null;

  constructor(public router: Router, public events: Events, public amplifyService: AmplifyService) {
    // this.events.subscribe('data:AuthState', async (data) => {
    //   if (data.loggedIn) {
    //     this.signedIn = true;
    //   } else {
    //     this.signedIn = false;
    //   }
    // });
    this.authSubscription();
  }

  canActivate() {
    return this.signedIn;
  }

  authSubscription() {
    this.amplifyService.authStateChange$.subscribe((authState: AuthState) => {
      console.log(authState);
      if (authState.state === 'signedIn') {
        Auth.currentUserInfo().then((user) => {
          console.log(user);
          this.user = user;

          Analytics.record({
            name: 'signedIn',
            // Attribute values must be strings
            attributes: { email: authState.user.attributes.email }
          });
        });
        this.router.navigateByUrl('/app/tabs/map');
      } else {
        this.user = null;
      }
    });

    Auth.getModuleName();

    console.log(this.amplifyService.auth());
  }
}
