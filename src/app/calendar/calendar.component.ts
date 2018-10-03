import { ICalendar } from './../models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // Verify if a day is chosen
  chosen: string;
  @Output() month = new EventEmitter<number>();

  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  constructor() { }

  ngOnInit() {
    this.chosen = this.months[new Date().getMonth()];
  }

  // When the day is chosen, load the data from the db using the date as a parameter.
  choseDay(month: number) {
    this.chosen = this.months[month];
    this.month.emit(month);
  }

}