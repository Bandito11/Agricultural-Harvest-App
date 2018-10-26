import { ICalendar } from './../models';
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../utils';

@Component({
  selector: 'crops-abundance',
  templateUrl: './crops-abundance.component.html',
  styleUrls: ['./crops-abundance.component.scss']
})
export class CropsAbundanceComponent implements OnChanges {
  @Input()
  date: ICalendar;
  abundantCrops: ICrop[];
  showAll = false;
  pageOne: ICrop[];
  pageTwo: ICrop[];

  constructor(private crops: CropsService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.getCrops(changes['date'].currentValue.month);
  }

  /**
   * Generate arrays of crops queried by actions.
   * @param month
   */
  getCrops(month: number) {
    this.crops.getCrops({ month: month, action: cropsAction.abundance }).then(response => {
      if (response.success) {
        this.abundantCrops = [...response.data];
        this.pageOne = this.abundantCrops.filter((crop, index) => {
          if (index < 5) {
            return crop;
          }
          return;
        });
        this.pageTwo = this.abundantCrops.filter((crop, index) => {
          if (index >= 5) {
            return crop;
          }
          return;
        });
      } else {
        console.error(response.error);
      }
    });
  }

  showAllCrops() {
    if (this.showAll) {
      this.showAll = false;
    } else {
      this.showAll = true;
    }
  }
}
