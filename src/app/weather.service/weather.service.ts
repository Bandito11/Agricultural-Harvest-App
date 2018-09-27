import { IApiResponse, ICurrentWeather, IForecast } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  host: string;

  constructor(private httpClient: HttpClient) {
    this.host = `http://localhost:5000/weather`;
  }

  getWeather() {
    return this.httpClient.get<IApiResponse<{ current: ICurrentWeather, forecast: IForecast[] }>>(this.host)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
