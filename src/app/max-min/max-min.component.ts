import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min',
  standalone: false,

  templateUrl: './max-min.component.html',
  styleUrl: './max-min.component.scss',
})
export class MaxMinComponent {
  @Input() minLabel = 'minLabel :';
  @Input() maxLabel = 'maxLabel :';

  @Output() minChang = new EventEmitter();
  @Output() maxChang = new EventEmitter();

  doMinChange(value: number) {
    this.minChang.emit(value);
  }

  doMaxChange(value: number) {
    this.maxChang.emit(value);
  }
}
