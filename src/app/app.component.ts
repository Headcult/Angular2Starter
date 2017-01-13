import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Starter Kit for Angular 2 Apps';

  views: Object[] = [
    {
      name: 'Home',
      description: 'Dashboard',
      icon: 'home',
      routerLink: 'home'
    },
    {
      name: 'My Account',
      description: 'Edit account information',
      icon: 'account_box',
      routerLink: 'account'
    },
    {
      name: 'About',
      description: 'What is this about?',
      icon: 'settings',
      routerLink: 'about'
    }
  ];

}
