import { cropsAction } from './../common';
import { TipsService } from './../tips.service';
import { CropsService } from './../crops.service';
import { Component, OnInit } from '@angular/core';
import { ICrop } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private crops: CropsService, private tips: TipsService) {
    this.abundantCrops = [];
    this.productionCrops = [];
    this.noProductionCrops = [];
    // this.tipsData = {};
  }

  abundantCrops: ICrop[] = [];
  productionCrops: ICrop[];
  noProductionCrops: ICrop[];
  // tipsData;

  ngOnInit() {
    const month = new Date().getMonth();
    this.crops.getCrops({ month: month, action: cropsAction.abundance })
      .then(res => {
        if (res.success) {
          this.abundantCrops = [...res.data];
        } else {
          this.handleError(res.error);
        }
      });
    this.crops.getCrops({ month: month, action: cropsAction.production })
      .then(res => {
        if (res.success) {
          this.productionCrops = [...res.data];
        } else {
          this.handleError(res.error);
        }
      });
    this.crops.getCrops({ month: month, action: cropsAction.noProduction })
      .then(res => {
        if (res.success) {
          this.noProductionCrops = [...res.data];
        } else {
          this.handleError(res.error);
        }
      });
    // this.tips.getTips({ zodiac: 'taurus', phase: '' })
    //   .then(res => this.tipsData = res);
  }

  handleError(error) {
    console.error(error);
  }
}
