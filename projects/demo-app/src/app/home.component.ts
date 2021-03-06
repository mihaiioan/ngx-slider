import { Component } from '@angular/core';
import { Options, LabelType } from '@m0t0r/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  simpleSliderValue = 50;
  simpleSliderOptions: Options = {
    floor: 0,
    ceil: 100
  };

  rangeSliderLowValue = 25;
  rangeSliderHighValue = 75;
  rangeSliderOptions: Options = {
    floor: 0,
    ceil: 100
  };

  ticksSliderValue = 5;
  ticksSliderOptions: Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };

  customisedSliderLowValue = 150;
  customisedSliderHighValue = 350;
  customisedSliderOptions: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };

  styledSliderLowValue = 30;
  styledSliderHighValue = 70;
  styledSliderOptions: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };

  verticalSliderValue = 5;
  verticalSliderOptions: Options = {
    floor: 0,
    ceil: 10,
    vertical: true
  };

  constructor() { }
}
