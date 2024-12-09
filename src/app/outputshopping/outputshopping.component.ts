import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../shopping/models/product';

@Component({
  selector: 'app-outputshopping',
  standalone: false,

  templateUrl: './outputshopping.component.html',
  styleUrl: './outputshopping.component.scss',
})
export class OutputshoppingComponent {
  products: Product[] = [];

  filteredProducts: Product[] = this.products;

  constructor(private http: HttpClient) {
    this.http.get<Product[]>(`/api/product`).subscribe((res) => {
      this.products = res;
      this.filteredProducts = this.products;
    });
  }

  searchProduct(text: string) {
    this.filteredProducts = this.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();
      return productName.indexOf(searchName) !== -1;
    });
  }
}
