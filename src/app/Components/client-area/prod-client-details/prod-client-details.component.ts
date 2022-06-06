import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prodInterface } from 'src/app/models/prodInterface';
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
    private productService: ProductService
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

  public isNotEmpty() {
    return Object.keys(this.product).length > 0;
  }
}
