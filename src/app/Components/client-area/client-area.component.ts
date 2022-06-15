import { Component, OnInit } from '@angular/core';

import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartService } from 'src/app/services/cart.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-area',
  templateUrl: './client-area.component.html',
  styleUrls: ['./client-area.component.css'],
})
export class ClientAreaComponent implements OnInit {
  public loading: boolean = false;
  public products: prodInterface[] = [];
  public errorMessage: string | null = null;
  public search: any;
  public stockQuantityStatus: string = 'positive';
  public currentPage: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toast: NgToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProductsFromServer();
  }

  getAllProductsFromServer() {
    this.loading = true;
    this.productService.getAllProducts().subscribe(
      (data: prodInterface[]) => {
        this.products = data;
        this.loading = false;
      },
      (error: string) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
  getStockColor() {
    return this.stockQuantityStatus === 'positive' ? 'lightgreen' : '#ff9292';
  }

  addToCart(product: prodInterface) {
    this.cartService.addToCart(product);
    // window.alert('Your product has been added to the cart!');
    this.toast.success({
      detail: 'Success message',
      summary: 'Product successfully added to cart!',
      duration: 5000,
    });
    console.log(product);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }
}
