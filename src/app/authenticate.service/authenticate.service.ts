import { IApiResponse } from './../models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { handleError } from '../common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(
    private httpClient: HttpClient) { }

  authenticate() {
    const body = {
        'key': '123'
    };
    const host = `http://localhost:5000/authenticate`;
    this.httpClient.post<IApiResponse<string>>(host, body)
      .pipe(
        retry(3),
        catchError(handleError)
      )
      .subscribe(response => {
        if (response.success) {
          sessionStorage.setItem('token', response.data);
        } else {
          console.error(response.error + '\n' + response.data);
        }
      });
  }
}