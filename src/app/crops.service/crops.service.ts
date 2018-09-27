import { Injectable } from '@angular/core';
import { ICrop, IApiResponse } from '../models';
import { getFileFromAssets } from '../common';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  constructor() { }

  getCrops(opts: { month: number, action: string }): Promise<IApiResponse<ICrop[]>> {
    let crops: ICrop[];
    let response: IApiResponse<ICrop[]> = {
      success: false,
      error: null,
      data: [],
      dateStamp: new Date()
    };
    const errorMsg = 'No hay vegetales en la lista para este mes';
    return new Promise((resolve, reject) => {
      getFileFromAssets('./assets/crops/crops.json')
        .then(data => {
          crops = <ICrop[]>JSON.parse(data);
          switch (opts.action) {
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
            case 'production':
              const beginCrops = this.getFilteredCrops({ prop: opts.action, crops: crops, month: opts.month });
              if (beginCrops.length > 0) {
                response = {
                  ...response,
                  success: true,
                  data: [...response.data, ...beginCrops]
                };
              } else {
                response = {
                  ...response,
                  error: errorMsg
                };
              }
              break;
            case 'noProduction':
              const noProductionCrops = this.getFilteredCrops({ prop: opts.action, crops: crops, month: opts.month });
              if (noProductionCrops.length > 0) {
                response = {
                  ...response,
                  success: true,
                  data: [...response.data, ...noProductionCrops]
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
              reject(response);
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

  getFilteredCrops(opts: { crops: ICrop[], month: number, prop: string }) {
    let crops = [];
    opts.crops.map(crop => {
      crop[opts.prop].find(month => {
        if (month === opts.month) {
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
