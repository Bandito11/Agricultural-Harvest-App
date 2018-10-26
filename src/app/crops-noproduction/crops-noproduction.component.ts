import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../utils';

@Component({
  selector: 'crops-noproduction',
  templateUrl: './crops-noproduction.component.html',
  styleUrls: ['./crops-noproduction.component.scss']
})
export class CropsNoproductionComponent implements OnChanges {
  @Input()
  date: ICalendar;
  noProductionCrops: ICrop[] = [];
  showAll = false;
  pageOne: ICrop[];
  pageTwo: ICrop[] = [];

  constructor(private crops: CropsService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.getCrops(changes['date'].currentValue.month);
  }

  /**
   * Generate arrays of crops queried by actions.
   * @param month
   */
  getCrops(month: number) {
    this.crops.getCrops({ month: month, action: cropsAction.noProduction }).then(response => {
      if (response.success) {
        this.noProductionCrops = [...response.data];
        this.pageOne = this.noProductionCrops.filter((crop, index) => {
          if (index < 5) {
            return crop;
          }
          return;
        });
        this.pageTwo = this.noProductionCrops.filter((crop, index) => {
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
