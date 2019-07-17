import { Component } from '@angular/core';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  signUpConfig = {
    header: 'Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
      {
        label: 'Username',
        key: 'username',
        required: true,
        displayOrder: 1,
        type: 'string',
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        displayOrder: 2,
        type: 'password'
      },
      {
        label: 'Email',
        key: 'email',
        required: false,
        displayOrder: 3,
        type: 'string',
      },
      {
        label: 'Phone Number',
        key: 'phone_number',
        required: true,
        displayOrder: 4,
        type: 'string'
      },
    ]
  };
}
