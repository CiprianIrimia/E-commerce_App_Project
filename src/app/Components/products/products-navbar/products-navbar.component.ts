import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css'],
})
export class ProductsNavbarComponent implements OnInit {
  productsNavbarTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
