import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public loading: boolean = false;
  public product: prodInterface = {} as prodInterface;
  public errorMessage: string | null = null;
  public categories: prodCategory[] = [] as prodCategory[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((data: prodCategory[]) => {
      this.categories = data;
    });
  }

  createSubmit() {
    this.productService.createProduct(this.product).subscribe(
      (data: prodInterface) => {
        this.router.navigate(['products']).then();
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['products/add']).then();
      }
    );
  }
}
