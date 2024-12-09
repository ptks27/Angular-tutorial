import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingSearchComponent } from './shopping-search/shopping-search.component';

@NgModule({
  declarations: [ShoppingCartComponent, ShoppingSearchComponent],
  imports: [CommonModule, IconFieldModule, InputIconModule, HttpClientModule],
  exports: [ShoppingCartComponent, ShoppingSearchComponent],
})
export class ShoppingModule {}
