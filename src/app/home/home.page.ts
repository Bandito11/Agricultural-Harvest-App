import { WeatherService } from '../weather.service/weather.service';
import { cropsAction } from './../common';
import { CropsService } from '../crops.service/crops.service';
import { Component, OnInit } from '@angular/core';
import { ICrop, ICalendar, ICurrentWeather, IForecast } from '../models';
import { TipsService } from '../tips.service/tips.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  zodiacName: string;
  zodiacImage: string;

  constructor() { }

  ngOnInit() {
    const currentDate: ICalendar = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      weekday: new Date().getDay()
    };
    this.setZodiac(currentDate);
  }

  setZodiac(date: ICalendar) {
    switch (date.month) {
      case 0:
        if (date.day >= 20 && date.day <= 31) {
          this.zodiacName = 'Aquarius';
          this.zodiacImage = 'zodiac-aquarius-zodiac-sign-symbol-1';
        } else {
          this.zodiacName = 'Capricorn';
          this.zodiacImage = 'zodiac-capricorn-2';
        }
        break;
      case 1:
        if (date.day >= 19 && date.day <= 29) {
          this.zodiacName = 'Pisces';
          this.zodiacImage = 'zodiac-pisces';
        } else {
          this.zodiacName = 'Aquarius';
          this.zodiacImage = 'zodiac-aquarius-zodiac-sign-symbol-1';
        }
        break;
      case 2:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName = 'Aries';
          this.zodiacImage = 'zodiac-aries-zodiac-sign-symbol';
        } else {
          this.zodiacName = 'Pisces';
          this.zodiacImage = 'zodiac-pisces';
        }
        break;
      case 3:
        if (date.day >= 20 && date.day <= 31) {
          this.zodiacName = 'Taurus';
          this.zodiacImage = 'zodiac-taurus-zodiac-symbol-of-bull-head-front';
        } else {
          this.zodiacName = 'Aries';
          this.zodiacImage = 'zodiac-aries-zodiac-sign-symbol';
        }
        break;
      case 4:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName = 'Gemini';
          this.zodiacImage = 'zodiac-gemini-sign-of-zodiac';
        } else {
          this.zodiacName = 'Taurus';
          this.zodiacImage = 'zodiac-taurus-zodiac-symbol-of-bull-head-front';
        }
        break;
      case 5:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName = 'Cancer';
          this.zodiacImage = 'zodiac-crab-symbol-for-zodiac-cancer-sign';
        } else {
          this.zodiacName = 'Gemini';
          this.zodiacImage = 'zodiac-gemini-sign-of-zodiac';
        }
        break;
      case 6:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName = 'Leo';
          this.zodiacImage = 'zodiac-leo-lion-head-side';
        } else {
          this.zodiacName = 'Cancer';
          this.zodiacImage = 'zodiac-crab-symbol-for-zodiac-cancer-sign';
        }
        break;
      case 7:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName = 'Virgo';
          this.zodiacImage = 'zodiac-virgo-woman-head-shape-symbol';
        } else {
          this.zodiacName = 'Leo';
          this.zodiacImage = 'zodiac-leo-lion-head-side';
        }
        break;
      case 8:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName = 'Libra';
          this.zodiacImage = 'zodiac-libra-balanced-scale-symbol';
        } else {
          this.zodiacName = 'Virgo';
          this.zodiacImage = 'zodiac-virgo-woman-head-shape-symbol';
        }
        break;
      case 9:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName = 'Scorpio';
          this.zodiacImage = 'zodiac-scorpion-shape';
        } else {
          this.zodiacName = 'Libra';
          this.zodiacImage = 'zodiac-libra-balanced-scale-symbol';
        }
        break;
      case 10:
        if (date.day >= 22 && date.day <= 31) {
          this.zodiacName = 'Sagittarius';
          this.zodiacImage = 'zodiac-sagittarius-sign';
        } else {
          this.zodiacName = 'Scorpio';
          this.zodiacImage = 'zodiac-scorpion-shape';
        }
        break;
      case 11:
        if (date.day >= 22 && date.day <= 31) {
          this.zodiacName = 'Capricorn';
          this.zodiacImage = 'zodiac-capricorn-2';
        } else {
          this.zodiacName = 'Sagittarius';
          this.zodiacImage = 'zodiac-sagittarius-sign';
        }
        break;
      default:
        this.zodiacImage = '#';
    }
  }
}
