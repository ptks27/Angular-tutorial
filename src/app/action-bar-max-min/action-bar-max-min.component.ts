import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-max-min',
  standalone: false,
  
  templateUrl: './action-bar-max-min.component.html',
  styleUrl: './action-bar-max-min.component.scss'
})
export class ActionBarMaxMinComponent {
  counter: number = 0;
 

  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  decrease() {
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter)
    }
  }

  increase() {
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter)
    }
  }
}
