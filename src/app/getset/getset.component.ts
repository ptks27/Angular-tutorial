import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  standalone: false,

  templateUrl: './getset.component.html',
  styleUrl: './getset.component.scss',
})
export class GetsetComponent {
  priceList = [0];

  get summaryPrice() {
    const summary = this.priceList.reduce((sum, price) => sum + price, 0);
    return summary;
  }

  get productPrice() {
    return 100;
  }

  set productPrice(value: number) {
    console.log(value);
  }

  constructor() {
    console.log(this.productPrice);
    this.productPrice = 200;
  }

  addPrice(price: number) {
    this.priceList.push(price);
  }
}
