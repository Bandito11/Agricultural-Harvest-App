import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const timeout = 1500;

export const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

export function getUTCTime(utc) {
    const date = new Date(0);
    date.setUTCSeconds(utc);
    const utcDate = date.toString().slice(0, 15);
    const utcTime = date.toString().slice(16, 24);
    // tslint:disable-next-line:radix
    let hour = parseInt(utcTime.slice(0, 2));
    let civTime;
    if (hour === 0) {
        hour = 12;
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} AM`;
    } else if (hour === 12) {
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} PM`;
    } else if (hour > 12) {
        hour -= 12;
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} PM`;
    } else {
        civTime = `${hour.toString()}${utcTime.slice(2, utcTime.length)} AM`;
    }
    const correctedDate = `${utcDate} ${civTime}`;
    return correctedDate;
}

export function getFileFromAssets(path) {
    return fetch(path).then(res => {
        if (res.text) {
            return res.text();
        }
    });
}

export enum cropsAction {
    abundance = 'abundance',
    production = 'production',
    noProduction = 'noProduction'
}

export function handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
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

  export enum tokenErrors {
     JsonWebTokenError = 'JsonWebTokenError',
     NotBeforeError = 'NotBeforeError',
     TokenExpiredError = 'TokenExpiredError'

  }