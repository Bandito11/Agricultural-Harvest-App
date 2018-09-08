import { Injectable } from '@angular/core';
import { ICrop, IApiResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  constructor() { }

  async getCrops(opts: { month: number, action: string }) {
    let crops: ICrop[];
    let response: IApiResponse<ICrop[]> = {
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
    const errorMsg = 'No hay vegetales en la lista para este mes';
    crops = <ICrop[]>JSON.parse(file);
    switch (opts.action.toLowerCase()) {
      case 'abundance':
        const abundantCrops = this.getFilteredCrops({ prop: opts.action, crops: crops, month: opts.month });
        if (abundantCrops.length > 0) {
          response = {
            ...response,
            success: true,
            data: [...response.data, ...abundantCrops]
          };
        } else {
          response = {
            ...response,
            error: errorMsg
          };
        }
        break;
      case 'beginorproduction':
        const beginCrops = this.getFilteredCrops({ prop: opts.action, crops: crops, month: opts.month });
        if (beginCrops.length > 0) {
          response = {
            ...response,
            success: true,
            data: { ...response.data, ...beginCrops }
          };
        } else {
          response = {
            ...response,
            error: errorMsg
          };
        }
        break;
      case 'noproduction':
        const noProductionCrops = this.getFilteredCrops({ prop: opts.action, crops: crops, month: opts.month });
        if (noProductionCrops.length > 0) {
          response = {
            ...response,
            success: true,
            data: { ...response.data, ...noProductionCrops }
          };
        } else {
          response = {
            ...response,
            error: errorMsg
          };
        }
        break;
      default:
        response = {
          ...response,
          error: 'Chose an incorrect ACTION Parameter. Can only be one of the following: abundance, beginOrProduction, noProduction'
        };
        return response;
    }
    return response;
  }

  private getFromFile() {
    const path = './assets/crops/crops.json';
    return new Promise((resolve, reject) => {
      fetch(path).then(res => {
        if (res.text) {
          return res.text();
        }
      }).then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  getFilteredCrops(opts: { crops: ICrop[], month: number, prop: string }) {
    let crops = [];
    opts.crops.map(crop => {
      crop[opts.prop].map((abundantMonth) => {
        if (abundantMonth === opts.month) {
          crops = [
            ...crops,
            {
              name: crop.name,
              color: crop.color,
              icon: crop.icon,
              type: crop.type
            }
          ];
        }
      });
    });
    return crops;
  }

}
