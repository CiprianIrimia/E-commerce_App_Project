import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
})
export class ProductManagerComponent implements OnInit {
  public loading: boolean = false;
  public products: prodInterface[] = [];
  public errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe((data: prodInterface[]) => {
      this.products = data;
      this.loading = false;
    });
    // ,error:(error) => {
    //   this.errorMessage = error;
    //   this.loading = false
    // });
  }
}
