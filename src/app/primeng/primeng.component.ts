import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng',
  standalone: false,

  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
})
export class PrimengComponent implements OnInit {
  value: string = 'Hello PrimeNg';
  products = [
    {
      shirt: 'Adidas',
      shoes: 'Nike',
      pants: 'HM',
    },
    {
      shirt: 'Adidas1',
      shoes: 'Nike',
      pants: 'HM',
    },
    {
      shirt: 'Adidas2',
      shoes: 'Nike',
      pants: 'HM',
    },
    {
      shirt: 'Adidas3',
      shoes: 'Nike',
      pants: 'HM',
    },
    {
      shirt: 'Adidas4',
      shoes: 'Nike',
      pants: 'HM',
    },
    {
      shirt: 'Adidas5',
      shoes: 'Nike',
      pants: 'HM',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
