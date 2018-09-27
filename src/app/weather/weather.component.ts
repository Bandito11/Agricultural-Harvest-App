import { Component, OnInit } from '@angular/core';
import { IForecast, ICurrentWeather } from '../models';
import { WeatherService } from '../weather.service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentWeather = <ICurrentWeather>{};
  forecasts: IForecast[] = [];

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }


  getWeather() {
    this.weather.getWeather().subscribe(response => {
      if (response.success) {
        this.currentWeather = {...response.data.current};
        this.forecasts = [...response.data.forecast];
      } else {
        console.error(response.error);
      }
    },
    error => console.error(error));
  }
}
