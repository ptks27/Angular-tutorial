import { Component } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  standalone: false,

  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss',
})
export class MaxMinMeterComponent {
  appMinLabel = 'myAppMinLabel :';
  appMaxLabel = 'myAppMaxLabel :';

  doAppMinChange(value: number) {
    console.log('test minChange event :', value);
  }

  doAppMaxChange(value: number) {
    console.log('test maxChange event :', value);
  }
}
