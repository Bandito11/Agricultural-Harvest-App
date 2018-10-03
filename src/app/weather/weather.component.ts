import { IPhase } from './../models';
import { tokenErrors } from './../common';
import { AuthenticateService } from './../authenticate.service/authenticate.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() phase = new EventEmitter<string>();
  props: string[] = [];
  moonPhase: IPhase = {
    icon: '',
    phase: '',
    newMoon: '',
    fullMoon: ''
  };
  constructor(private weather: WeatherService, private auth: AuthenticateService) { }

  ngOnInit() {
    this.getWeather();
    this.getMoonPhases();
  }

  getMoonPhases() {
    this.weather.getFullMoon().subscribe(response => {
      if (response.success) {
        this.moonPhase = {
          ...this.moonPhase,
          ...response.data
        };
      }
    },
      error => console.error(error)
    );
  }


  getWeather() {
    this.weather.getWeather().subscribe(response => {
      if (response.success) {
        this.currentWeather = { ...response.data.current };
        this.forecasts = [...response.data.forecast];
        this.phase.emit(response.data.current.moon.phase);
        this.moonPhase = {
          ...this.moonPhase,
          ...response.data.current.moon
        };
      } else {
        if (response.error === 'TokenExpiredError') {
          this.auth.authenticate();
          this.getWeather();
        } else {
          console.error(response.error + '\n' + response.data);
        }
      }
    },
      error => console.error(error)
    );
  }
}


