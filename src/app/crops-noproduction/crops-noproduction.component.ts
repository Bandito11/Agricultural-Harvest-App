import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../common';

@Component({
  selector: 'crops-noproduction',
  templateUrl: './crops-noproduction.component.html',
  styleUrls: ['./crops-noproduction.component.scss']
})
export class CropsNoproductionComponent implements OnChanges {
  noProductionCrops: ICrop[] = [];
  @Input() date: ICalendar;

  constructor(private crops: CropsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.getCrops(changes['date'].currentValue.month);
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
