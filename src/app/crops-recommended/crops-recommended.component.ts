import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { cropsAction } from '../utils';
import { CropsService } from '../crops.service/crops.service';

@Component({
  selector: 'crops-recommended',
  templateUrl: './crops-recommended.component.html',
  styleUrls: ['./crops-recommended.component.scss']
})
export class CropsRecommendedComponent implements OnChanges {
  @Input()
  date: ICalendar;
  inProductionCrops: ICrop[] = [];
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
    this.crops.getCrops({ month: month, action: cropsAction.production }).then(res => {
      if (res.success) {
        this.inProductionCrops = [...res.data];
        this.pageOne = this.inProductionCrops.filter((crop, index) => {
          if (index < 5) {
            return crop;
          }
          return;
        });
        this.pageTwo = this.inProductionCrops.filter((crop, index) => {
          if (index >= 5) {
            return crop;
          }
          return;
        });
      } else {
        console.error(res.error);
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
