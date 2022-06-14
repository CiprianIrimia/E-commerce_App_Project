import { Injectable } from '@angular/core';
import { prodInterface } from '../models/prodInterface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: prodInterface[] = [];

  constructor() {}

  addToCart(product: prodInterface) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
