import { Injectable } from '@angular/core';
import {  IApiResponse, ITips } from '../models';
import { HttpClient } from '@angular/common/http';
import { getFileFromAssets } from '../common';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

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
         if(data){
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
         }
         else{
          reject({
            success: false, 
            error:'Couldn\'t find the file!'
          });
           }
        });
    });
  }

  /**
 * Get tips based on zodiac and moonphase
 * @param opts {zodiac:string, phase:string}
 * From Web Api
 */
  // getTips(opts: { zodiac: string, phase: string }) {
  //   const host = `http://localhost:5000/tips`;
  //   const options = { params: opts };
  //   const host = `http://localhost:5000/tips`;
  //   return this.httpClient.get<IApiResponse<string[]>>(host, options)
  //     .pipe(
  //       retry(3),
  //       catchError(handleError)
  //     );
  // }


}
