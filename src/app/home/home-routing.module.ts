import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/home', canActivate: [AuthGuard],  component: HomeComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
