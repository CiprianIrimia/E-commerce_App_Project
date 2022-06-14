import { error } from '@angular/compiler/src/util';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable, from, pipe, fromEvent } from 'rxjs';
import { map, filter, tap, retry } from 'rxjs/operators';

import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
})
export class ProductManagerComponent implements OnInit {
  public loading: boolean = false;
  public products: prodInterface[] = [];
  public errorMessage: string | null = null;
  public search: any;
  public getStock: number = 1;
  public stockQuantityStatus: string = '';
  public currentPage: number = 1;

  @Input() product: prodInterface | any;

  @Output() deleteProduct: EventEmitter<prodInterface> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getAllProductsFromServer();
    this.getStockValue();
    this.getColor();
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

  clickDeleteProduct(productId: string) {
    this.loading = true;
    if (productId) {
      this.productService.deleteProduct(productId).subscribe(
        (res) => {
          this.toast.info({
            detail: 'Success message',
            summary: 'Product successfully deleted!',
            duration: 6000,
          });
          this.getAllProductsFromServer();
          this.loading = false;
        },
        (error) => {
          this.toast.error({
            detail: 'Error message',
            summary: 'Something went wrong!',
            duration: 6000,
          });
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  getStockValue() {
    this.productService
      .getAllProducts()
      .pipe(
        map((res: any) =>
          res.map((data: any) => {
            return {
              getStock: data.stockQuantity,
            };
          })
        )
      )
      .subscribe(console.log);
  }

  getColor() {
    if (this.getStock > 0) {
      this.stockQuantityStatus = 'positive';
    } else {
      this.stockQuantityStatus = 'negative';
    }
    return this.stockQuantityStatus === 'positive' ? 'lightgreen' : '#ff9292';
  }
}
