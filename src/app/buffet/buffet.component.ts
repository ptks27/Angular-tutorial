import { Component } from '@angular/core';

@Component({
  selector: 'app-buffet',
  standalone: false,

  templateUrl: './buffet.component.html',
  styleUrl: './buffet.component.scss',
})
export class BuffetComponent {
  value = 0;
  calBuffet(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4;
  }
}
