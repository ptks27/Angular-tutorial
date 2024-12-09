import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  standalone: false,

  templateUrl: './array.component.html',
  styleUrl: './array.component.scss',
})
export class ArrayComponent {
  customerList: string[] = ['customer1', 'customer2', 'customer3', 'customer4'];

  pushCustomer() {
    this.customerList.push('customer' + (this.customerList.length + 1));
  }

  unShiftCustomer() {
    this.customerList.unshift('customer' + (this.customerList.length + 1));
  }

  removeCustomer(index: number) {
    this.customerList.splice(index, 1);
  }
}
