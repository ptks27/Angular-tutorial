import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  standalone: false,

  templateUrl: './sqaure-flex.component.html',
  styleUrl: './sqaure-flex.component.scss',
})
export class SqaureFlexComponent {
  
  sqaureHeight = 200;
  sqaureWidth = 350;
}
