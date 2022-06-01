import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';
import { ProductService } from 'src/app/services/product.service';

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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    //GET the contact ID
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('productId');
    });
    //GET the contact DETAILS
  }
}
