import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent extends AppComponent {
  home: string = '';
  aboutUs: string = '';
  products: string = '';
  cart: string = '';
  signUp: string = '';
  login: string = '';
  googleAccount: string = '';
  emailPassword: string = '';

  ngOnInit(): void {}
}
