import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  standalone: false,

  templateUrl: './style.component.html',
  styleUrl: './style.component.scss',
})
export class StyleComponent {
  active = true;
}
