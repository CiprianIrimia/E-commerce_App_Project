import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { prodInterface } from 'src/app/models/prodInterface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prod-client-details',
  templateUrl: './prod-client-details.component.html',
  styleUrls: ['./prod-client-details.component.css'],
})
export class ProdClientDetailsComponent implements OnInit {
  public loading: boolean = false;
  public productId: string | null = null;
  public product: prodInterface = {} as prodInterface;
  public errorMessage: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = param.get('productId');
    });
    if (this.productId) {
      this.loading = true;
      this.productService.getProduct(this.productId).subscribe(
        (data: prodInterface) => {
          this.product = data;
          this.loading = false;
        },
        (error: string) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  addToCart(product: prodInterface) {
    this.cartService.addToCart(product);
    // window.alert('Your product has been added to the cart!');
    this.toast.success({
      detail: 'Success message',
      summary: 'Product successfully added to cart!',
      duration: 5000,
    });
  }
  public isNotEmpty() {
    return Object.keys(this.product).length > 0;
  }
}
