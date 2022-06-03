import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multipan-bakery';

  supportLanguages = ['en', 'ro'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');

    // const browserLang: any = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang);
  }

  selectLang(lang: string) {
    this.translateService.use(lang);
  }
}
