import { Component, OnInit } from '@angular/core';
import { ICalendar } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  zodiac: string;
  date: ICalendar;
  phase: string;
  myShortName = 'banditotr';
  myConfig = {
    identifier: '/',
    url: 'https://banditotr.com'
  };

  constructor() { }
  ngOnInit() {
    this.date = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      weekday: new Date().getDay()
    };
  }

  getPhase(phase: string) {
    this.phase = phase;
  }

  getZodiacName(name: string) {
    this.zodiac = name;
  }
}
