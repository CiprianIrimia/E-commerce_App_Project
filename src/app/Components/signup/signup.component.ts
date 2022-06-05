import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

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
    private productService: ProductService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.loading = true;
    this.http
      .post<any>('http://localhost:5000/signupUsers', this.signupForm.value)
      .subscribe(
        (res) => {
          this.toast.success({
            detail: 'Success message',
            summary: 'SingUp successfully. Please login!',
            duration: 7000,
          });
          this.signupForm.reset();
          this.router.navigate(['login']);
          this.loading = false;
        },
        (error) => {
          this.errorMessage =
            'Something went wrong with your server connection. Please try again later or contact your system administrator!';
          this.signupForm.reset();
          this.loading = false;
          this.toast.error({
            detail: 'Error message',
            summary: 'Sign up fail!',
            duration: 6000,
          });
        }
      );
  }
}
