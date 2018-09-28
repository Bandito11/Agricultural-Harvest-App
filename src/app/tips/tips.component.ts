import { TipsService } from './../tips.service/tips.service';
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnChanges {
  @Input() zodiac: string;
  @Input() phase: string;
  messages: string[];
  private zodiacName: string;
  private moonPhase: string;
  constructor(private tips: TipsService) { }

  async ngOnChanges(changes: SimpleChanges) {
    // Get messages from file
    if (changes['zodiac']) {
      this.zodiacName = changes['zodiac'].currentValue;
    }
    if (changes['phase']) {
      this.moonPhase = changes['phase'].currentValue;
    }
    try {
      if (this.moonPhase && this.zodiacName) {
        const response = await this.tips.getTips({ zodiac: this.zodiacName, phase: this.moonPhase });
        if (response.success) {
          this.messages = [...response.data];
        } else {
          console.error(response.error);
        }
      }
    } catch (error) {
      console.error(error);
    }
    // Get messages from Web Api
    // if (changes['zodiac']) {
    //   this.zodiacName = changes['zodiac'].currentValue;
    // }
    // if (changes['phase']) {
    //   this.moonPhase = changes['phase'].currentValue;
    // }
    // try {
    //   if (this.moonPhase && this.zodiacName) {
    //     this.tips.getTips({ zodiac: this.zodiacName, phase: this.moonPhase })
    //       .subscribe(response => {
    //         if (response.success) {
    //           this.messages = [...response.data];
    //         } else {
    //           console.error(response.error);
    //         }
    //       },
    //         error => console.error(error));
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }
}
