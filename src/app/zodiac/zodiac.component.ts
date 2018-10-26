import { Component, OnChanges, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { ICalendar } from '../models';

@Component({
  selector: 'app-zodiac',
  templateUrl: './zodiac.component.html',
  styleUrls: ['./zodiac.component.scss']
})
export class ZodiacComponent implements OnChanges {
  @Input()
  date: ICalendar;
  @Output()
  zodiacName = new EventEmitter<string>();

  zodiacSign;
  zodiacImage;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.setZodiac(changes['date'].currentValue);
  }

  setZodiac(date: ICalendar) {
    switch (date.month) {
      case 0:
        if (date.day >= 20 && date.day <= 31) {
          this.zodiacName.emit('Aquarius');
          this.zodiacSign = 'Acuario';
          this.zodiacImage = 'zodiac-aquarius-zodiac-sign-symbol-1';
        } else {
          this.zodiacName.emit('Capricorn');
          this.zodiacSign = 'Capricornio';
          this.zodiacImage = 'zodiac-capricorn-2';
        }
        break;
      case 1:
        if (date.day >= 19 && date.day <= 29) {
          this.zodiacName.emit('Pisces');
          this.zodiacSign = 'Piscis';
          this.zodiacImage = 'zodiac-pisces';
        } else {
          this.zodiacName.emit('Aquarius');
          this.zodiacSign = 'Acuario';
          this.zodiacImage = 'zodiac-aquarius-zodiac-sign-symbol-1';
        }
        break;
      case 2:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName.emit('Aries');
          this.zodiacSign = 'Aries';
          this.zodiacImage = 'zodiac-aries-zodiac-sign-symbol';
        } else {
          this.zodiacName.emit('Pisces');
          this.zodiacSign = 'Piscis';
          this.zodiacImage = 'zodiac-pisces';
        }
        break;
      case 3:
        if (date.day >= 20 && date.day <= 31) {
          this.zodiacName.emit('Taurus');
          this.zodiacSign = 'Tauro';
          this.zodiacImage = 'zodiac-taurus-zodiac-symbol-of-bull-head-front';
        } else {
          this.zodiacName.emit('Aries');
          this.zodiacSign = 'Aries';
          this.zodiacImage = 'zodiac-aries-zodiac-sign-symbol';
        }
        break;
      case 4:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName.emit('Gemini');
          this.zodiacSign = 'Géminis';
          this.zodiacImage = 'zodiac-gemini-sign-of-zodiac';
        } else {
          this.zodiacName.emit('Taurus');
          this.zodiacSign = 'Tauro';
          this.zodiacImage = 'zodiac-taurus-zodiac-symbol-of-bull-head-front';
        }
        break;
      case 5:
        if (date.day >= 21 && date.day <= 31) {
          this.zodiacName.emit('Cancer');
          this.zodiacSign = 'Cáncer';
          this.zodiacImage = 'zodiac-crab-symbol-for-zodiac-cancer-sign';
        } else {
          this.zodiacName.emit('Gemini');
          this.zodiacSign = 'Géminis';
          this.zodiacImage = 'zodiac-gemini-sign-of-zodiac';
        }
        break;
      case 6:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName.emit('Leo');
          this.zodiacSign = 'Leo';
          this.zodiacImage = 'zodiac-leo-lion-head-side';
        } else {
          this.zodiacName.emit('Cancer');
          this.zodiacSign = 'Cáncer';
          this.zodiacImage = 'zodiac-crab-symbol-for-zodiac-cancer-sign';
        }
        break;
      case 7:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName.emit('Virgo');
          this.zodiacSign = 'Virgo';
          this.zodiacImage = 'zodiac-virgo-woman-head-shape-symbol';
        } else {
          this.zodiacName.emit('Leo');
          this.zodiacSign = 'Leo';
          this.zodiacImage = 'zodiac-leo-lion-head-side';
        }
        break;
      case 8:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName.emit('Libra');
          this.zodiacSign = 'Libra';
          this.zodiacImage = 'zodiac-libra-balanced-scale-symbol';
        } else {
          this.zodiacName.emit('Virgo');
          this.zodiacSign = 'Virgo';
          this.zodiacImage = 'zodiac-virgo-woman-head-shape-symbol';
        }
        break;
      case 9:
        if (date.day >= 23 && date.day <= 31) {
          this.zodiacName.emit('Scorpio');
          this.zodiacSign = 'Escorpión';
          this.zodiacImage = 'zodiac-scorpion-shape';
        } else {
          this.zodiacName.emit('Libra');
          this.zodiacSign = 'Libra';
          this.zodiacImage = 'zodiac-libra-balanced-scale-symbol';
        }
        break;
      case 10:
        if (date.day >= 22 && date.day <= 31) {
          this.zodiacName.emit('Sagittarius');
          this.zodiacSign = 'Sagitario';
          this.zodiacImage = 'zodiac-sagittarius-sign';
        } else {
          this.zodiacName.emit('Scorpio');
          this.zodiacSign = 'Escorpión';
          this.zodiacImage = 'zodiac-scorpion-shape';
        }
        break;
      case 11:
        if (date.day >= 22 && date.day <= 31) {
          this.zodiacName.emit('Capricorn');
          this.zodiacSign = 'Capricornio';
          this.zodiacImage = 'zodiac-capricorn-2';
        } else {
          this.zodiacName.emit('Sagittarius');
          this.zodiacSign = 'Sagitario';
          this.zodiacImage = 'zodiac-sagittarius-sign';
        }
        break;
      default:
        this.zodiacImage = '#';
    }
  }
}
