import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar-view',
  standalone: false,
  
  templateUrl: './action-bar-view.component.html',
  styleUrl: './action-bar-view.component.scss'
})
export class ActionBarViewComponent {
  @Input() counter: number = 0;
 
  @Input() inputDisplay = true;
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
