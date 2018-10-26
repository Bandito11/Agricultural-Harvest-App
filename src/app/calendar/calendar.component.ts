import { ICalendar } from './../models';
import { months } from './../utils';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  // Verify if a day is chosen
  chosen: string;
  @Output()
  month = new EventEmitter<number>();
  months = months;

  zodiacImage;

  constructor() {}

  ngOnInit() {
    this.chosen = months[new Date().getMonth()];
  }

  // When the day is chosen, load the data from the db using the date as a parameter.
  choseDay(month: number) {
    this.chosen = months[month];
    this.month.emit(month);
  }

  setZodiac(month: number) {
    switch (month) {
      case 0:
        return 'zodiac-aquarius-zodiac-sign-symbol-1';
      case 1:
        return 'zodiac-pisces';
      case 2:
        return 'zodiac-aries-zodiac-sign-symbol';
      case 3:
        return 'zodiac-taurus-zodiac-symbol-of-bull-head-front';
      case 4:
        return 'zodiac-gemini-sign-of-zodiac';
      case 5:
        return 'zodiac-crab-symbol-for-zodiac-cancer-sign';
      case 6:
        return 'zodiac-leo-lion-head-side';
      case 7:
        return 'zodiac-virgo-woman-head-shape-symbol';
      case 8:
        return 'zodiac-libra-balanced-scale-symbol';
      case 9:
        return 'zodiac-scorpion-shape';
      case 10:
        return 'zodiac-sagittarius-sign';
      case 11:
        return 'zodiac-capricorn-2';
      default:
        return '#';
    }
  }
}
