import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather/services/weather.service';
import { Weather } from '../shared/weather/services/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [WeatherService]
})
export class HomeComponent implements OnInit {
  weatherResults: Weather;
  name: string;
  model = new Weather();
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {

  }

  getWeatherFromService(cityName: string) {
    this.weatherService
      .getWeather(cityName)
      .then(weatherResults => this.weatherResults = weatherResults);
  }

  searchWeatherByCity(cityNameFromSearchBox: string) {
    this.getWeatherFromService(cityNameFromSearchBox);
  }


}
