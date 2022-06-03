import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
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
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this.loading = true;
    this.http.get<any>('http://localhost:5000/signupUsers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.toast.success({
            detail: 'Success message',
            summary: 'Login successfully!',
            duration: 6000,
          });
          this.loginForm.reset();
          this.router.navigate(['products']);
          this.loading = false;
        } else {
          this.toast.error({
            detail: 'Error message',
            summary: 'Login failed. User not found!',
            duration: 6000,
          });
        }
      },
      (error: string) => {
        this.errorMessage =
          'Something went wrong with your server connection. Please try again later or contact your system administrator!';
        this.loading = false;
      }
    );
  }
}
