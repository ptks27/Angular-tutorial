import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex-main',
  standalone: false,
  
  templateUrl: './sqaure-flex-main.component.html',
  styleUrl: './sqaure-flex-main.component.scss'
})
export class SqaureFlexMainComponent {
  @Input() divWidth = 300;
  @Input() divHeight = 200;
}
