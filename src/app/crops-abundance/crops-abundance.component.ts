import { ICalendar } from './../models';
import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ICrop } from '../models';
import { CropsService } from '../crops.service/crops.service';
import { cropsAction } from '../common';

@Component({
  selector: 'crops-abundance',
  templateUrl: './crops-abundance.component.html',
  styleUrls: ['./crops-abundance.component.scss']
})
export class CropsAbundanceComponent implements OnChanges {
  @Input() date: ICalendar;
  abundantCrops: ICrop[] = [];
  constructor(private crops: CropsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.getCrops(changes['date'].currentValue.month);
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
