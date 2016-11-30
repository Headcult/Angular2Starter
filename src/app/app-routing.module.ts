import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth-guard.service';
import {AccountComponent} from './account/account.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
      { path: 'account', canActivate: [AuthGuard], component: AccountComponent },
      { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class Angular2starterRoutingModule { }
