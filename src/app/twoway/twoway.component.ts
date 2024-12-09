import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-twoway',
  standalone: false,

  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.scss',
})
export class TwowayComponent {
  @Input() divWidth = 300;
  @Input() divHeight = 200;

  appCounter = 20;
}
