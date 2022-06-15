import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public loading: boolean = false;
  public errorMessage: string | null = null;
  items = this.cartService.getCartData();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
