import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() lang: EventEmitter<string> = new EventEmitter();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  selectLang(selectedLanguage: string) {
    this.lang.emit(selectedLanguage);
  }

  logout(): void {
    this.auth.logout();
  }
}
