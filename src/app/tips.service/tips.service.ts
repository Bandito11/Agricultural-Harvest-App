import { Injectable } from '@angular/core';
import { ITips, IApiResponse } from '../models';
import { getFileFromAssets } from '../common';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor() { }

  getTips(opts: { zodiac: string, phase: string, message?: string }): Promise<IApiResponse<Partial<ITips>[]>> {
    let response: IApiResponse<Partial<ITips>[]> = {
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
                  data: [...response.data, { message: tip.message }]
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
              error: 'No hay valor disponible.'
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
}
