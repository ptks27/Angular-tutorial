import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,

  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  @Input() value = 0;
  @Input() value1 = 40;
}
