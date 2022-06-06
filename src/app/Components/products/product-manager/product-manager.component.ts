import { error } from '@angular/compiler/src/util';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

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
  public stockQuantityStatus: string = 'positive';

  @Input() product: prodInterface | undefined;

  @Output() deleteProduct: EventEmitter<prodInterface> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private toast: NgToastService
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
  getStockColor() {
    return this.stockQuantityStatus === 'positive' ? 'lightgreen' : '#ff9292';
  }
}
