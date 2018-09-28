import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop, ICalendar } from '../models';
import { cropsAction } from '../common';
import { CropsService } from '../crops.service/crops.service';

@Component({
  selector: 'crops-recommended',
  templateUrl: './crops-recommended.component.html',
  styleUrls: ['./crops-recommended.component.scss']
})
export class CropsRecommendedComponent implements OnChanges {
  inProductionCrops: ICrop[] = [];
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
