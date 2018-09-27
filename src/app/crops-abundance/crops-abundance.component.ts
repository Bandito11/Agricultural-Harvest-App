import { ICalendar } from './../models';
import { Component, OnInit } from '@angular/core';
import { ICrop } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../common';

@Component({
  selector: 'crops-abundance',
  templateUrl: './crops-abundance.component.html',
  styleUrls: ['./crops-abundance.component.scss']
})
export class CropsAbundanceComponent implements OnInit {

  abundantCrops: ICrop[] = [];
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
    this.crops.getCrops({ month: month, action: cropsAction.abundance })
      .then(response => {
        if (response.success) {
          this.abundantCrops = [...response.data];
        } else {
          console.error(response.error);
        }
      });
  }

}
