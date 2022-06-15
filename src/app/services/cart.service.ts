import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';
import { prodInterface } from '../models/prodInterface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];
  numOfCartItems = new BehaviorSubject([]);

  constructor() {}

  addToCart(product: prodInterface) {
    const exist = this.items.find((item: { id: string }) => {
      return item.id === product.id;
    });

    if (exist) {
      exist.stockQuantity--;
    } else {
      this.items.push(product);
      this.numOfCartItems.next(this.items);
      console.log(this.items);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
