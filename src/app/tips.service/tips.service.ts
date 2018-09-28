import { Injectable } from '@angular/core';
import {  IApiResponse, ITips } from '../models';
import { HttpClient } from '@angular/common/http';
import { getFileFromAssets } from '../common';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  host = `http://localhost:5000/tips`;

  constructor(private httpClient: HttpClient) { }

  /**
  * Get tips based on zodiac and moonphase
  * @param opts {zodiac:string, phase:string}
  * From local file
  */
  getTips(opts: { zodiac: string, phase: string }): Promise<IApiResponse<string[]>> {
    let response: IApiResponse<string[]> = {
      success: false,
      error: null,
      data: [],
      dateStamp: new Date()
    };
    return new Promise((resolve, reject) => {
      getFileFromAssets('./assets/tips/tips.json')
        .then(data => {
          const tips = <ITips[]>JSON.parse(data);
          try {
            tips.map(tip => {
              if (tip.zodiac === opts.zodiac && tip.phase === opts.phase) {
                response = {
                  ...response,
                  data: [...response.data, tip.message]
                };
              }
            });
          } catch (error) {
            response = {
              ...response,
              error: 'Hubo error extrayendo del API.'
            };
            reject(response);
          }
          if (response.data.length > 0) {
            response = {
              ...response,
              success: true
            };
          } else {
            response = {
              ...response,
              error: 'No hay recomendaciones disponible para este signo zodiacal y/o fase lunar.'
            };
          }
          resolve(response);
        })
        .catch(_ => {
          response = {
            ...response,
            error: 'Hubo error extrayendo la lista. Refresca la página y trate de nuevo.'
          };
          reject(response);
        });
    });
  }

  /**
 * Get tips based on zodiac and moonphase
 * @param opts {zodiac:string, phase:string}
 * From Web Api
 */
  // getTips(opts: { zodiac: string, phase: string }) {
  //   const options = { params: opts };
  //   return this.httpClient.get<IApiResponse<string[]>>(this.host, options)
  //     .pipe(
  //       retry(3),
  //       catchError(this.handleError)
  //     );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

}
