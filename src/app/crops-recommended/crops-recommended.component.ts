import { Component, OnInit } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { cropsAction } from '../common';
import { CropsService } from '../crops.service/crops.service';

@Component({
  selector: 'crops-recommended',
  templateUrl: './crops-recommended.component.html',
  styleUrls: ['./crops-recommended.component.scss']
})
export class CropsRecommendedComponent implements OnInit {
  inProductionCrops: ICrop[] = [];

  constructor(private crops: CropsService) { }

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
    this.crops.getCrops({ month: month, action: cropsAction.production })
      .then(res => {
        if (res.success) {
          this.inProductionCrops = [...res.data];
        } else {
          console.error(res.error);
        }
      });
  }
}
