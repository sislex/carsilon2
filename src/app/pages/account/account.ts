import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { AuthService } from '../../services/auth';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements OnInit {
  public showLogo = false;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.user && this.authService.user.attributes['custom:logo']) {
      this.showLogo = true;
    }
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changePhone() {
    const alert = await this.alertCtrl.create({
      header: 'Change Phone Number',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.setPhone(data['phone_number']);
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'phone_number',
          value: this.authService.user.attributes['phone_number'],
          placeholder: 'Phone'
        }
      ]
    });
    await alert.present();
  }

  logout() {
    Auth.signOut()
      .then(data => {
        console.log(data);
        this.authService.user = null;
        this.router.navigateByUrl('/login');
      })
      .catch(err => console.log(err));

  }

  support() {
    this.router.navigateByUrl('/support');
  }

  onImagePicked($event) {
    // console.log($event);
  }
  onImageLoaded($event) {
    // console.log($event);
  }

  async setPhone(phone) {
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    Auth.updateUserAttributes(currentAuthenticatedUser, {
      'phone_number': phone,
    }).then(async data => {
      Auth.currentUserInfo().then((user) => {
        this.authService.user = user;
        this.showLogo = true;
      });
    })
      .catch(err => console.log(err));
  }

  async onImageUploaded($event) {
    const imagePath = $event.key;
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    this.showLogo = false;
    Auth.updateUserAttributes(currentAuthenticatedUser, {
      'custom:logo': imagePath,
    }).then(async data => {
      Auth.currentUserInfo().then((user) => {
        this.authService.user = user;
        this.showLogo = true;
      });
    })
      .catch(err => console.log(err));
  }
}
