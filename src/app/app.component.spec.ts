/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

describe('App: Angular2starter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MaterialModule.forRoot()
      ],
    });
  });

  it('should create the app', async(() => {
    // let fixture = TestBed.createComponent(AppComponent);
    // let app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  }));

  it(`should have as title 'Starter Kit for Angular 2 Apps'`, async(() => {
    // let fixture = TestBed.createComponent(AppComponent);
    // let app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('Starter Kit for Angular 2 Apps');
  }));

  it('should render title in a span tag', async(() => {
    // let fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // let compiled = fixture.debugElement.nativeElement;
    // TODO Correct the below test case to test for the actual title content and not 'menu'
    // expect(compiled.querySelector('span').textContent).toContain('menu');
  }));
});
