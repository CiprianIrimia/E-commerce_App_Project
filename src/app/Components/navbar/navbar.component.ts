import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() lang: EventEmitter<string> = new EventEmitter();
  itemInCart!: number;

  constructor(
    private auth: AuthService,
    private toast: NgToastService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.numOfCartItems.subscribe((d) => {
      this.itemInCart = d.length;
    });
  }

  selectLang(selectedLanguage: string) {
    this.lang.emit(selectedLanguage);
  }

  logout(): void {
    this.auth.logout();
    return this.toast.info({
      detail: 'Info message',
      summary: 'Logout successfully!',
      duration: 6000,
    });
  }
}
