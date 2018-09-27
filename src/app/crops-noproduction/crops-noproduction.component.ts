import { Component, OnInit } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../common';

@Component({
  selector: 'crops-noproduction',
  templateUrl: './crops-noproduction.component.html',
  styleUrls: ['./crops-noproduction.component.scss']
})
export class CropsNoproductionComponent implements OnInit {

  constructor(private crops: CropsService) { }
  noProductionCrops: ICrop[] = [];

  ngOnInit() {
    const currentDate: ICalendar = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      weekday: new Date().getDay()
    };
    this.getCrops(currentDate.month);

  }

  /**
   * Generate arrays of crops queried by actions.
   * @param month
   */
  getCrops(month: number) {
    this.crops.getCrops({ month: month, action: cropsAction.noProduction })
      .then(response => {
        if (response.success) {
          this.noProductionCrops = [...response.data];
        } else {
          console.error(response.error);
        }
      });
  }
}
