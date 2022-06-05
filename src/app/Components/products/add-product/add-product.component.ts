import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { FormGroup } from '@angular/forms';

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

  constructor(
    private productService: ProductService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((data: prodCategory[]) => {
      this.categories = data;
    });
  }

  createSubmit() {
    this.loading = true;
    this.productService.createProduct(this.product).subscribe(
      (data: prodInterface) => {
        this.toast.success({
          detail: 'Success message',
          summary: 'New product successfully added!',
          duration: 6000,
        });
        this.router.navigate(['products']).then();
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['products/add']).then();
        this.loading = false;
        this.toast.warning({
          detail: 'Warning message',
          summary: 'No product added!',
          duration: 6000,
        });
      }
    );
  }
}
