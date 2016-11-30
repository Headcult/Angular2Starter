import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule }   from './login/login-routing.module';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import {Angular2starterRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    AccountComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginRoutingModule,
    MaterialModule.forRoot(),
    Angular2starterRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
