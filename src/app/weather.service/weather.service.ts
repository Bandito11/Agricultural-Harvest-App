import { IApiResponse, IWeather } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { throwError } from 'rxjs';
import { AuthenticateService } from '../authenticate.service/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient, private storage: Storage, private auth: AuthenticateService) { }

  /**
   * Get the Current Weather
   */
  getWeather() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setTimeout(() => this.getWeather(), 3000);
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers: headers,
      params: new HttpParams().set('token', token)
    };
    const host = `http://localhost:5000/weather`;
    return this.httpClient.get<IApiResponse<IWeather>>(host, options)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getFullMoon() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setTimeout(() => this.getFullMoon(), 3000);
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = {
      headers: headers,
      params: new HttpParams().set('token', token)
    };
    const host = `http://localhost:5000/moonphase`;
    return this.httpClient.get<IApiResponse<{ newMoon: string, fullMoon: string }>>(host, options)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Error:', error.error);
      console.error('Error:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
