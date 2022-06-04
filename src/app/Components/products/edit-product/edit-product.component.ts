import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public loading: boolean = false;
  public productId: string | null = null;
  public product: prodInterface = {} as prodInterface;
  public errorMessage: string | null = null;
  public categories: prodCategory[] = [] as prodCategory[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    //GET the contact ID
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('productId');
    });
    //GET the contact DETAILS
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(
        (data: prodInterface) => {
          this.product = data;
          this.loading = false;
          this.productService.getAllCategories().subscribe((data) => {
            this.categories = data;
          });
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    }
  }
  submitUpdate() {
    if (this.productId) {
      this.loading = true;
      this.productService.updateProduct(this.product, this.productId).subscribe(
        (data: prodInterface) => {
          this.toast.info({
            detail: 'Success message',
            summary: 'Product updated successfully!',
            duration: 6000,
          });
          this.router.navigate(['products']).then();
          this.loading = false;
        },
        (error) => {
          this.errorMessage = error;
          this.router.navigate([`products/edit/${this.productId}`]).then();
          this.loading = false;
          this.toast.warning({
            detail: 'Warning message',
            summary: 'Product details NOT modifyed',
            duration: 6000,
          });
        }
      );
    }
  }
}
