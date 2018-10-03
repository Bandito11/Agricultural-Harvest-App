import { AuthenticateService } from './../authenticate.service/authenticate.service';
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
  currentMonth: ICalendar;

  constructor(private auth: AuthenticateService) { }

  ngOnInit() {
    this.date = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      weekday: new Date().getDay()
    };
    if (!sessionStorage.getItem('token')) {
      this.auth.authenticate();
    }
    // Use this expired token to test the Auth Module
    // tslint:disable-next-line:max-line-length
    // sessionStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJBbmVtb25lOyIsImlhdCI6MTUzODM3MzY4NSwiZXhwIjoxNTM4Mzc1MTI1fQ.zbpJ7g-rrjaW2mjymm2keLtEYRBs8HWN0qQ7sp9ZfOo')
  }

  getPhase(phase: string) {
    this.phase = phase;
  }

  getZodiacName(name: string) {
    this.zodiac = name;
  }

  getCurrentMonth(month: number) {
    this.date = {
      ...this.currentMonth,
      month: month
    };
  }
}
