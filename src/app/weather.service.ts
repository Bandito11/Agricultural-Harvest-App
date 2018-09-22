import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  host: string;

  constructor(private httpClient: HttpClient) {
    this.host = `http://localhost:5000/weather`;
  }

  getWeather() {
    return this.httpClient.get(this.host);
  }
}
