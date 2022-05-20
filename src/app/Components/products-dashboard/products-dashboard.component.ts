import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ProductModel } from './product-dashboard.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css'],
})
export class ProductsDashboardComponent implements OnInit {
  formValue!: FormGroup;
  productModelObject: ProductModel = new ProductModel();
  productData!: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName: [''],
      category: [''],
      assortment: [''],
      flourType: [''],
      weight: [''],
      description: [''],
      image: [''],
      price: [''],
    });
  }

  postProductDetails() {
    this.productModelObject.productName = this.formValue.value.productName;
    this.productModelObject.category = this.formValue.value.category;
    this.productModelObject.assortment = this.formValue.value.assortment;
    this.productModelObject.flourType = this.formValue.value.flourType;
    this.productModelObject.weight = this.formValue.value.weight;
    this.productModelObject.description = this.formValue.value.description;
    this.productModelObject.image = this.formValue.value.image;
    this.productModelObject.price = this.formValue.value.price;

    this.api.postProduct(this.productModelObject).subscribe(
      (res) => {
        console.log(res);
        alert('Product added successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
      (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    );
  }
  getAllProducts() {
    this.api.getProduct().subscribe((res) => {
      this.productData = res;
    });
  }
}
