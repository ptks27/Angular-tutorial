import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  standalone: false,

  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
})
export class ActionComponent {
  @Input() counter: number = 0;
 

  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.counterChange.emit(this.counter)
    }
  }

  increase() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.counterChange.emit(this.counter)
    }
  }
}
