import { Injectable } from '@angular/core';
import { ITips, IApiResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor() { }

  async getTips(opts: {zodiac: string, phase: string, message?: string}) {
    let response: IApiResponse<Partial<ITips>[]> = {
      success: false,
      error: null,
      data: [],
      dateStamp: new Date()
    };
    let file;
    try {
      file = await this.getFromFile();
    } catch (error) {
      return response = {
        ...response,
        error: 'Hubo error extrayendo la lista. Refresca la página y trate de nuevo.'
      };
    }
    const tips = <ITips[]>JSON.parse(file);
    try {
      tips.map(tip => {
        if (tip.zodiac === opts.zodiac && tip.phase === opts.phase) {
          response.data = [
            ...response.data,
            {
              message: tip.message
            }
          ];
        }
      });
      if (response.data.length > 0) {
        response = { ...response, success: true };
      } else {
        response = { ...response, error: 'No hay valor disponible.' };
      }
    } catch (error) {
      response = { ...response, error: 'No hay valor disponible o hubo error extrayendo la data del API.' };
      response.data = [{ message: response.error }];
      return response;
    }
    return response;
  }

  private getFromFile() {
    const path = './assets/tips/tips.json';
    return new Promise((resolve, reject) => {
      fetch(path).then(res => {
        if (res.text) {
          return res.text();
        }
      }).then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

}
