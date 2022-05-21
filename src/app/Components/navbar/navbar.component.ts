import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() lang: EventEmitter<string> = new EventEmitter();

  home: string = '';
  aboutUs: string = '';
  products: string = '';
  cart: string = '';
  signUp: string = '';
  login: string = '';
  googleAccount: string = '';
  emailPassword: string = '';

  ngOnInit(): void {}

  selectLang(selectedLanguage: string) {
    this.lang.emit(selectedLanguage);
  }
}
