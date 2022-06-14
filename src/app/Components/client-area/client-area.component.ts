import { Component, OnInit } from '@angular/core';

import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgxPaginationModule } from 'ngx-pagination';

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

  constructor(private productService: ProductService) {}

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

  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }
}
