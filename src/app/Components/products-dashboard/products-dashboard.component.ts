import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css'],
})
export class ProductsDashboardComponent implements OnInit {
  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      productName: [''],
      category: [''],
      assortment: [''],
      flourType: [''],
      weight: [''],
      description: [''],
      price: [''],
    });
  }
}
