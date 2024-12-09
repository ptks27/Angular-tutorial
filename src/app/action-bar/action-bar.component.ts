import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: false,

  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  testClick() {
    console.log('test EventBinding');
  }

  testsNumberChange(value: number) {
    console.log('test NumberChange from Action-bar : ', value);
  }
}
