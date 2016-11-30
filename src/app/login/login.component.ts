import {Component, AfterViewInit}   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';

declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 190,
      // 'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': param => this.onSignIn(param)
    });
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  public onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
    let id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);

    this.login();

  };

  signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

}
