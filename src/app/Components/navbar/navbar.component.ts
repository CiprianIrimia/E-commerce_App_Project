import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent extends AppComponent {
  home: string = 'Home';
  aboutUs: string = 'About Us';
  products: string = 'Products';
  cart: string = 'Cart';
  signUp: string = 'Sign Up';
  login: string = 'Login';
  googleAccount: string = 'Google account';
  emailPassword: string = 'Email & Password';

  ngOnInit(): void {}
}
