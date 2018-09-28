import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CropsAbundanceComponent } from '../crops-abundance/crops-abundance.component';
import { CropsRecommendedComponent } from '../crops-recommended/crops-recommended.component';
import { CropsNoproductionComponent } from '../crops-noproduction/crops-noproduction.component';
import { WeatherComponent } from '../weather/weather.component';
import { TipsComponent } from '../tips/tips.component';
import { ZodiacComponent } from '../zodiac/zodiac.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, WeatherComponent, ZodiacComponent, CropsAbundanceComponent, CropsRecommendedComponent, 
    CropsNoproductionComponent, TipsComponent]
})
export class HomePageModule {}
