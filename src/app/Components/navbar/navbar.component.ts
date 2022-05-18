import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent extends AppComponent {
  home: string = 'Home';

  @Output() changeLang: EventEmitter<string> = new EventEmitter();

  onClickLang() {
    this.changeLang.emit();
  }

  ngOnInit(): void {}
}
