/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        [MaterialModule.forRoot()],
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Starter Kit for Angular 2 Apps'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Starter Kit for Angular 2 Apps');
  }));
});
