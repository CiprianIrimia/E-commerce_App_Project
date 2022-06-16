import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';
import { prodInterface } from '../models/prodInterface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  placeholder: any = [];
  numOfCartItems = new BehaviorSubject([]);
  public items: prodInterface[] = [];

  constructor() {
    const locStorage = this.getCartData();
    if (locStorage) this.numOfCartItems.next(locStorage);
  }

  addToCart(product: prodInterface) {
    const locStorage = this.getCartData();

    let exist: prodInterface;

    if (locStorage)
      exist = locStorage.find((item: { id: string }) => {
        return item.id === product.id;
      });

    if (exist!) {
      exist.qty++;
      this.setCartData(locStorage);
    } else {
      if (locStorage) {
        const newData = [...locStorage, product];
        this.setCartData(newData);
        this.numOfCartItems.next(this.getCartData());
      }
      this.placeholder.push(product);
      this.setCartData(this.placeholder);
    }
    // getItems() {
    //   return this.items;
    // }
  }
  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.numOfCartItems.next(this.getCartData());
  }
  getCartData() {
    return JSON.parse(localStorage.getItem('cart')!);
  }
  emptyCart() {
    this.placeholder = [];
    this.getCartData();
  }
}
