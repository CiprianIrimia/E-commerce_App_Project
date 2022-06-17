import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public loading: boolean = false;
  public errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private productService: ProductService,
    private toast: NgToastService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  checkUser(): void {
    // console.log(this.loginForm.value);
    this.loading = true;
    this.http.get<any>('http://localhost:5000/signupUsers').subscribe(
      (result) => {
        const user = result.find((a: any) => {
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
          this.loading = false;
        } else {
          this.loginForm.reset();
          this.toast.error({
            detail: 'Error message',
            summary: 'Login failed. User not found!',
            duration: 6000,
          });
          this.router.navigate(['login']);
        }
        this.loading = false;
        this.errorMessage = '';
      },
      (error: string) => {
        this.errorMessage =
          'Something went wrong with your server connection. Please try again later or contact your system administrator!';
        this.loading = false;
        this.toast.error({
          detail: 'Error message',
          summary: 'Login fail!',
          duration: 6000,
        });
      }
    );
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.checkUser();
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['products']);
        },
        () => {
          console.log(this.loginForm.value);
          this.router.navigate(['client-area']);
        }
      );
    }
  }
}
