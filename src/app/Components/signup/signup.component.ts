import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public loading: boolean = false;
  public errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      mobile: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.loading = true;
    this.http
      .post<any>('http://localhost:5000/signupUsers', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Signup successfull');
          this.signupForm.reset();
          this.router.navigate(['login']);
          this.loading = false;
        },
        (error: string) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
  }
}
