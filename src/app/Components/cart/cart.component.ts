import { Component, OnInit, Output } from '@angular/core';
import { prodInterface } from 'src/app/models/prodInterface';
import { CartService } from 'src/app/services/cart.service';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public loading: boolean = false;
  public errorMessage: string | null = null;
  public items: prodInterface[] = [];
  public total!: number;

  constructor(
    private cartService: CartService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.cartService.numOfCartItems.subscribe((data) => {
      this.items = data;

      if (this.items) this.getTotal(this.items);
    });
  }

  onDelete(index: number) {
    this.items.splice(index, 1);
    this.cartService.setCartData(this.items);
    this.toast.error({
      detail: 'Warning message',
      summary: 'Product deleted!',
      duration: 5000,
    });
    this.getTotal(this.items);
  }

  validateInput(event: any, index: number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.items[index].qty;
      return;
    }
    this.qtyUpdated(qty, index);
  }
  private qtyUpdated(qty: number, index: number) {
    this.items[index].qty = qty;

    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }

  addQty(qty: number, index: number) {
    this.items[index].qty = qty;
  }

  getTotal(data: any) {
    let subtotal = 0;

    for (const item of data) subtotal += item.price * item.qty;

    this.total = subtotal;
  }

  onCheckout() {
    this.toast.success({
      detail: 'Success message',
      summary: 'Your order was successfully exported!',
      duration: 5000,
    });
  }
}
