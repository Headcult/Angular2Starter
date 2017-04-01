import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Weather } from './weather';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
  private weatherAPIUrl = 'http://localhost:10010/Weather?city=London';  // URL to web api

  weatherTitle = 'Weather details here!!!';

  getWeather(city: string): Promise<any> {
    const url = 'https://weather-service-dev.herokuapp.com/weather?city=' + city;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Weather[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) {
  };

}
