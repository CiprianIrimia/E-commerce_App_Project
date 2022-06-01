import { Component, OnInit } from '@angular/core';
import { prodCategory } from 'src/app/models/prodCategory';
import { prodInterface } from 'src/app/models/prodInterface';

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

  constructor() {}

  ngOnInit(): void {}
}
