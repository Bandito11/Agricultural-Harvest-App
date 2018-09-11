import { TipsService } from './../tips.service';
import { CropsService } from './../crops.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private crops: CropsService, private tips: TipsService) { }

  cropsData = {};
  tipsData = {};
  ngOnInit() {
    this.crops.getCrops({ month: new Date().getMonth(), action: 'abundance' })
      .then(res => this.cropsData = res.data[0]);
    this.tips.getTips({ zodiac: 'taurus', phase: '' })
      .then(res => this.tipsData = res.data[0]);
  }

}
