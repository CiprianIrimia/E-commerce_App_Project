import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() lang: EventEmitter<string> = new EventEmitter();

  constructor(private auth: AuthService, private toast: NgToastService) {}

  ngOnInit(): void {}

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
