import { Component, OnInit } from '@angular/core';
import { prodCategory } from 'src/app/models/prodCategory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
})
export class ProductManagerComponent implements OnInit {
  public loading: boolean = false;
  public products: prodCategory[] = [];
  public errorMessage: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
